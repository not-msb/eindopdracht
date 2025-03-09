const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal vrienden van alle personen bij elkaar opgeteld.');
console.log('Bijvoorbeeld: 455');

let totalNumberOfFriends = 0;
for (const person of people) {

    for (const friend of person.friends) {
        totalNumberOfFriends++;
    }
}

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(totalNumberOfFriends);