const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat is getrouwd.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 150');

/*
 * Hallo meneer, Ik heb toch besloten mijn opdrachten op een speciale manier te maken
 * U zult best wel snel merken wat er aan de hand is met de code lol
 * Ik zal nog steeds mijn best doen uit te leggen wat er precies gebeurt bij elke functie :P
 *
 * Het idee is om alle Array methods niet te gebruiken, *behalve* Array.reduce
 * Voor het geval u de functie niet kent, het werkt zo:
 *  reduce neemt 3 argumenten: array, callback, accumulator
 *  het iterate over de array en roept de callback functie, met het huidige element en de accumulator
 *  de return-value van de callback word dan de nieuwe accumulator
 *  de laatste waarde van de accumulator word dan door reduce gereturnd
 *
 * Daarnaast zullen de meeste vragen in het begin ook bijna identiek zijn
 *
 * De meeste patronen herhalen zich in mijn code:
 *  - c is bijna altijd de accumulator
 *  - arr.reduce((c, _) => c + 1, 0) berekent de length van arr
 *  - [...m, {}] word vaak gebruikt om elements te pushen
 *  - reduce((c, _) => c && <cond>, true)   => Array.any
 *  - reduce((c, _) => c || <cond>, false)  => Array.all
*/

// schrijf jouw code hier

/*
 * In dit voorbeeld iteraten we over people
 * javascript type-conversion semantics laten ons lekker de married boolean omzetten naar een int
 * als married waar is, zal het dus de waarde van 1 hebben, en de accumulator incrementen
*/
const antw = people.reduce((c, p) => c + p.married, 0);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
