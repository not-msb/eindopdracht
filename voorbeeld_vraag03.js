const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat is getrouwd en jonger is dan 20 jaar.');
console.log('Of minstens 100 jaar oud is is en niet is getrouwd.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 12');

// Schrijf hier jouw code die de vraag beantwoord
// en licht in het Nederlands toe wat jouw code precies doet

// hierin slaan we het aantal personen op, we beginnen de telling bij nul
let numberOfPeople = 0;
// voor elke persoon in de lijst van alle personen
for(const person of people) {
    // jonger dan 20 en getrouwd
    let youngAndMarried = person.age < 20 && person.married === true;
    // 100 jaar of ouder en niet getrouwd
    let oldAndUnmarried = person.age >= 100 && person.married === false;
    // als jong en getrouwd, of, oud en niet getrouwd
    if(youngAndMarried || oldAndUnmarried) {
        // tel 1 op het aantal tot dusver getelde personen
        numberOfPeople = numberOfPeople + 1;
    }
}
// numberOfPeople bevat nu het aantal gevraagde personen

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(numberOfPeople);