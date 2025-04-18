const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat "Football" als hobby heeft en "Swimming" niet als hobby heeft.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 63');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 01, maar nu veranderen we onze boolean met een wat complexere expression
 * we reducen twee keer over de hobbies, eenmaal om een includes te simuleren, en andermaals voor een !includes
 *  reduce((c, _) => c && <cond>, true)   checkt in de hele array of een condition eenmaal volstaat, aldus Array.any
 *  reduce((c, _) => c || <cond>, false)  checkt in de hele array of een condition eenmaal onvolstaat, aldus Array.all
*/
const antw = people.reduce((c, p) => c + (p.hobbies.reduce((c, h) => c || h == "Football", false) && p.hobbies.reduce((c, h) => c && h != "Swimming", true)), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
