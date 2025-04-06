const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het totale aantal vrienden waarvan de bevriende persoon niet getrouwd is.');
console.log('En de vrienden jonger zijn dan 30.');
console.log('Bijvoorbeeld: 28');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 07, maar nu veranderen we onze 'length' met een filter+count
*/
const antw = people.reduce((c, p) => !p.married ? c + p.friends.reduce((c, f) => c + (f.age < 30), 0) : c, 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
