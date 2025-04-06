const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam en leeftijd van alle vrienden die minstens 103 oud zijn.');
console.log('Bijvoorbeeld:\n...\nKiley, leeftijd: 103\nYolanda, leeftijd: 103\n...');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c.concat(p.friends.reduce((m, f) => f.age >= 103 ? [...m, {naam: `${f.name.first} ${f.name.last}`, leeftijd: f.age}] : m, [])), []);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
