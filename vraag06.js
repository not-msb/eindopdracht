const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam en leeftijd van alle vrienden die minstens 103 oud zijn.');
console.log('Bijvoorbeeld:\n...\nKiley, leeftijd: 103\nYolanda, leeftijd: 103\n...');

// schrijf jouw code hier

/*
 * Hier hebben we onze accumulator vervangen met een array
 * Daarnaast zie je ook een mooie nested reduce, in die reduce filteren we mooi over alle vrienden
 *   Het [...m, {}] patroon word vaak gebruikt om the pushen, omdat we geen andere Array methods gebruiken (technische gezien is het de spread operator, maar het is geen directe method, dus idc)
 * De ternary word gebruikt, om alles in 1 regel te houden, omdat ik geen zin had in blocks
 *   In het geval dat de condition onwaar is, returnen we de originele array weer, net alsof we het element geskip hadden dus, zo imiteren we een filter
*/
const antw = people.reduce((c, p) =>
    c.concat(
        p.friends.reduce((m, f) => f.age >= 103 ? [...m, {naam: `${f.name.first} ${f.name.last}`, leeftijd: f.age}] : m, [])
    ),
    []
);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
