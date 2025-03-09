const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat ouder is dan 25 jaar.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 270');

// Schrijf hier jouw code die de vraag beantwoord 
// en licht in het Nederlands toe wat jouw code precies doet

// hierin slaan we op hoeveel personen er ouder zijn dan 25, we beginnen de telling bij nul
let numberOfPeople = 0;
// voor elke persoon in de lijst van alle personen
for(const person of people) {
    // als de persoon ouder is dan 25
    if(person.age > 25) {
        // tel 1 op het aantal tot dusver getelde personen
        numberOfPeople = numberOfPeople + 1;
    }
}
// numberOfPeople bevat nu het aantal personen die ouder zijn dan 25 jaar

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(numberOfPeople);