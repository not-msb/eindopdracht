const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er minstens 7 personen wonen hoeveel personen er wonen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, aantal personen: 10\nGreece, aantal personen: 7\n...');

// schrijf jouw code hier
const antw = [...people.reduce(
    (c, p) => p.friends.reduce(
        (c, f) => c.set(f.location.country, c.get(f.location.country) + 1),
        c.set(p.location.country, c.get(p.location.country) + 1)
    ),
    people.reduce((c, p) => p.friends.reduce((c, f) => c.set(f.location.country, 0), c.set(p.location.country, 0)), new Map())
)].reduce((c, m) => m[1] >= 7 ? [...c, {land: m[0], aantal: m[1]}] : c, []);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
