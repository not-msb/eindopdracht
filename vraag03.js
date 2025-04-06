const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen waarvan "Mango" hun favoriete eten is.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 100');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 01, maar nu veranderen we onze boolean met een wat complexere expression
*/
const antw = people.reduce((c, p) => c + (p.favoriteFood == "Mango"), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
