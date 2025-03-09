const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam van alle personen die ouder zijn dan 100 jaar.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: ["John", "Alfred", "Alice"]');

// Schrijf hier jouw code die de vraag beantwoord 
// en licht in het Nederlands toe wat jouw code precies doet

// hierin slaan we alle voornamen op van iedereen die ouder is dan 100
let firstNames = [];
// voor elke persoon in de lijst van alle personen
for(const person of people) {
    // als de persoon ouder is dan 100
    if(person.age > 100) {
        // voeg de voornaam van de persoon toe aan de lijst van alle voornamen
        firstNames.push(person.name.first);
    }
}
// firstNames bevat nu de voornamen van personen die ouder zijn dan 100 jaar


// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(firstNames);
