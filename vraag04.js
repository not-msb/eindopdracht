const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat ouder is dan 98 of jonger is dan 25.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 8');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c + (p.age > 98 || p.age < 25), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
