const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat ouder is dan 30 en jonger is dan 35.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 8');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 01, maar nu veranderen we onze boolean met een wat complexere expression
*/
const antw = people.reduce((c, p) => c + (p.age > 30 && p.age < 35), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
