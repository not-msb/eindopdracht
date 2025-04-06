const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat "Football" als hobby heeft en "Swimming" niet als hobby heeft.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 63');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c + (p.hobbies.reduce((c, h) => c || h == "Football", false) && p.hobbies.reduce((c, h) => c && h != "Swimming", true)), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
