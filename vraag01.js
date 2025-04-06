const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat is getrouwd.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 150');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c + p.married, 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
