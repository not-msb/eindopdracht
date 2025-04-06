const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de gemiddelde leeftijd van alle personen.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 62.12');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c + p.age, 0) / people.reduce((c, p) => c + 1, 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
