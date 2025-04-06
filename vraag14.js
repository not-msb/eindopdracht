const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er minstens 7 personen wonen hoeveel personen er wonen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, aantal personen: 10\nGreece, aantal personen: 7\n...');

// schrijf jouw code hier

/*
 * Bij deze vraag gebruiken we voor het eerst een helper functie, voornamelijk zodat mijn code niet *te* afgrijselijk lang word.
 * De update method wrapt het map.set(key, callback(map.get() ?? or)) patroon, in een simpele functie
 *
 * In de reduces iterates we over alle personen en dan hun vrienden
 * Eigenlijk zijn het een hoop 'length-patronen' die we in een map stoppen
 *
 * In de tweede fase converten we de map naar een iterator, zodat we er lekker weer reduce op kunnen callen
 * m[0] is hier de key, en m[1] de value (als integer)
 * Daarna doen we de standaard ternary filtering
*/
Map.prototype.update = function(key, callback, or) {
    const v = this.get(key) ?? or;
    return this.set(key, callback(v));
};

const antw = people
    .reduce(
        (c, p) => p.friends.reduce(
            (c, f) => c.update(f.location.country, (v) => v+1, 0),
            c.update(p.location.country, (v) => v+1, 0)
        ),
        new Map()
    )
    .entries()
    .reduce((c, m) =>
        m[1] >= 7 ? [...c, {land: m[0], aantal: m[1]}] : c,
        []
    );

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
