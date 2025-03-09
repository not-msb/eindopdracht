const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam van alle vrienden waarvan de bevriende persoon in "Bulgaria" is.');
console.log('Bijvoorbeeld:\n...\nRessie\nJudge\n...');

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');

for(const person of people) {
    if(person.location.country === 'Bulgaria') {

        for(const friend of person.friends) {
            console.log(friend.name.first);
        }
    }
}