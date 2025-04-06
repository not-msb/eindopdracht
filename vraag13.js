const people = require('./people.json');

// maak een eigen vraag en beantwoord deze
// zorg dat jouw vraag logisch en duidelijk is en dat jouw antwoord klopt
// maak de vraag en het antwoord in dezelfde stijl als de eerdere vragen

console.log('Print de voornamen en leeftijden van alle combinaties van personen en vrienden, waarbij hun lijftijds verschil minstens zo groot is als de derdemachtswortel van de afstand tussen hun geografische coordinaten in kilometers');

//https://www.movable-type.co.uk/scripts/latlong.html
function distance(lat1, lon1, lat2, lon2) {
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/360;
    const Δλ = (lon2-lon1) * Math.PI/360;

    const a = Math.sin(Δφ) * Math.sin(Δφ) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ) * Math.sin(Δλ);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return 6371e3 * c; // in metres
}

// schrijf jouw code hier
const antw = people.reduce((c, p) => 
    [...c, ...p.friends.reduce((c, f) =>
        Math.abs(p.age - f.age) >= Math.cbrt(
            distance(p.location.coordinates.latitude, p.location.coordinates.longitude, f.location.coordinates.latitude, f.location.coordinates.longitude) / 1000
        )
            ? [...c, {persoon: p.name.first, vriend: f.name.first, verschil: Math.abs(p.age - f.age)}]
            : c,
        [])],
    []);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log(antw);
