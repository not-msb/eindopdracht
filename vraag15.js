const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er meer dan 7 personen wonen hoeveel personen welke hobby beoefenen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, hobbies: {"Basketball":6,"Swimming":6,"Running":8,"Football":9}\n...');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 15, maar nu gebruiken we fase 1 van vraag 14 direct
 * We hebben nu de increment van de 'length-patronen' vervangen met reduces op de hobbies
 * Eigenlijk dus nog een laag in de value van de Map toegevoegt
 *
 * In de tweede fase converten we de map naar een iterator, zodat we er lekker weer reduce op kunnen callen
 * m[0] is hier de key, en m[1] de value (als list)
 * We gebruiken m[0] om het aantal wonende personen te vinden in een land
 * Daarna doen we de standaard ternary filtering
*/
Map.prototype.update = function(key, callback, or) {
    const v = this.get(key) ?? or;
    return this.set(key, callback(v));
};

const woningen = people.reduce(
    (c, p) => p.friends.reduce(
        (c, f) => c.update(f.location.country, (v) => v+1, 0),
        c.update(p.location.country, (v) => v+1, 0)
    ),
    new Map()
);

const antw = people
    .reduce(
        (c, p) => p.friends.reduce(
            (c, f) => c.update(f.location.country, (m) => f.hobbies.reduce((c, h) => c.update(h, (v) => v+1, 0), m), new Map()),
            c.update(p.location.country, (m) => p.hobbies.reduce((c, h) => c.update(h, (v) => v+1, 0), m), new Map())
        ),
        new Map()
    )
    .entries()
    .reduce((c, m) =>
        woningen.get(m[0]) > 7 ? [...c, {land: m[0], aantal: woningen.get(m[0]), hobbies: m[1]}] : c,
        []
    );

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
