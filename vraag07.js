const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het totale aantal vrienden waarvan de bevriende persoon getrouwd is.');
console.log('Bijvoorbeeld: 240');

// schrijf jouw code hier

// Alternatieve interpretatie
//const antw = people.reduce((c, p) => c + p.friends.reduce((c, f) => c || f.married, false), 0);

/*
 * Een mix van 01 en 06, maar nu gebruiken we het het 'length-patroon' om het aantal vrienden te berekenen
*/
const antw = people.reduce((c, p) => p.married ? c + p.friends.reduce((c, f) => c + 1, 0) : c, 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
