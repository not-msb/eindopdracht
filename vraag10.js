const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de gemiddelde leeftijd van alle vrienden.');
console.log('Bijvoorbeeld: 59.801292323');

// schrijf jouw code hier

/*
 * Hetzelfde concept als bij 09, maar we voegen een extra reduce laag toe, zodat we de vrienden kunnen iteraten
*/
const antw = people.reduce((c, p) => c + p.friends.reduce((c, f) => c + f.age, 0), 0) / people.reduce((c, p) => c + p.friends.reduce((c, f) => c + 1, 0), 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
