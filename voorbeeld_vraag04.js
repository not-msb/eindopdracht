const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam en achternaam van alle personen die in "Bulgaria" zijn.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 80');

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');

for(const person of people) {
    if(person.location.country === 'Bulgaria') {
        let name = person.name.first + " " + person.name.last;
        console.log(name);
    }
}