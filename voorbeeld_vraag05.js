const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam en het aantal vrienden van iedereen die in "Bulgaria" is.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld:\n...\nCicero, aantal vrienden: 3\nAmara, aantal vrienden: 2\n...');

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');

for(const person of people) {
    if(person.location.country === 'Bulgaria') {
        console.log(person.name.first + ", aantal vrienden: " + person.friends.length);
    }
}