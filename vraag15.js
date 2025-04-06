const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er meer dan 7 personen wonen hoeveel personen welke hobby beoefenen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, hobbies: {"Basketball":6,"Swimming":6,"Running":8,"Football":9}\n...');

// schrijf jouw code hier

// De enige vraag waarbij ik meerdere stappen nodig had
const woningen = people.reduce(
    (c, p) => p.friends.reduce(
        (c, f) => c.set(f.location.country, c.get(f.location.country) + 1),
        c.set(p.location.country, c.get(p.location.country) + 1)
    ),
    people.reduce((c, p) => p.friends.reduce((c, f) => c.set(f.location.country, 0), c.set(p.location.country, 0)), new Map())
);

const antw = [...people.reduce(
    (c, p) => p.friends.reduce(
        (c, f) => c.set(f.location.country, f.hobbies.reduce((c, h) => c.set(h, (c.get(h) ?? 0) + 1), c.get(f.location.country))),
        c.set(p.location.country, p.hobbies.reduce((c, h) => c.set(h, (c.get(h) ?? 0) + 1), c.get(p.location.country)))
    ),
    people.reduce((c, p) => p.friends.reduce((c, f) => c.set(f.location.country, new Map()), c.set(p.location.country, new Map())), new Map())
)].reduce((c, m) => woningen.get(m[0]) > 7 ? [...c, {land: m[0], aantal: woningen.get(m[0]), hobbies: m[1]}] : c, []);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
