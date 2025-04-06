const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam, leeftijd en hobbies van alle vrienden die exact dezelfde hobbies hebben als de bevriende persoon.');
console.log('Print deze informatie alleen als zowel de vriend als de bevriende persoon ouder zijn dan 70.');
console.log('Hobbies zijn ook hetzelfde als alleen de volgorde van de hobbies anders is.');
console.log('Als beide geen hobbies hebben dan hebben zij ook dezelfde hobbies.');
console.log('Bijvoorbeeld:\n...\nMabelle(86), hobbies: ["Basketball","Football","Running","Swimming"]\n...');

// schrijf jouw code hier
const antw = people.reduce((c, p) => c.concat(p.friends.reduce((m, f) => p.hobbies.reduce((c, h) => c && f.hobbies.includes(h), true) && f.hobbies.reduce((c, h) => c && p.hobbies.includes(h), true) && (f.age > 70 && p.age > 70) ? [...m, {naam: f.name.first, leeftijd: f.age, hobbies: f.hobbies}] : m, [])), []);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
