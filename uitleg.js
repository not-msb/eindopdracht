/**
 * Er zijn in totaal 15 vragen die je kunt beantwoorden. 
 * Voor elke vraag kun je evenveel punten verdienen.
 * Elke vraag is 1 punt waard.
 * Bij 7.5 punten heb je een 5.5 als eindcijfer.
 * De vragen beginnen makkelijk en worden steeds moeilijker.
 * Geef bij elke vraag ook kort uitleg in het Nederlands over hoe jouw oplossing werkt.
 * Zonder uitleg kun je geen punten verdienen.
 * 
 * Er zijn ook 7 voorbeeld vragen waar ik de antwoorden heb uitgewerkt.
 * De eerste 10 vragen zijn kleine variaties op 1 van de 7 voorbeeld vragen.
 * Maak gebruik van dat feit als je inspiratie nodig hebt!
 * Als ik het heb over personen dan moet je personen in "friends": [...] niet meetellen tenzij anders vermeld.
 * Als ik het heb over vrienden gaat het alleen om de vrienden in "friends": [...] tenzij anders vermeld.
 * 
 * In elke vraag wordt er gewerkt met het bestand people.json. 
 * Dit bestand bevat een lijst met 300 verschillende personen.
 * Voor elke vraag zul je in deze lijst moeten zoeken om antwoord te geven op de vraag.
 * De structuur van personen uit de lijst is hier beneden toegelicht.
 * 
 * Om de eerste 10 opdrachten te kunnen maken heb je genoeg aan de voorbeeld opdrachten
 * en de voorbeelden die je hier kunt vinden https://quickref.me/javascript.html
 * 
 * Vooral de volgende onderdelen in quickref.me zijn belangrijk.
 * #Getting Started (helemaal)
 * #JavaScript Conditionals (if Statement, Operators)
 * #JavaScript Scope (Block Scoped Variables)
 * #JavaScript Arrays (Arrays, Property .length, Method .push())
 * #JavaScript Loops (for...of loop, Nested)
 * #JavaScript Objects (Accessing Properties, Non-existent properties, Mutable)
 */

const person = { // een person heeft de onderstaande eigenschappen
    "married": true, // getrouwd: true of false
    "favoriteFood": "Apple", // favoriete eten: Apple, Banana of Mango
    "age": 85, // leeftijd: 18 t/m 105
    "name": {
        "first": "Tatyana", // voornaam
        "last": "Tromp" // achternaam
    },
    "hobbies": [ // mogelijke hobbies: Swimming, Running, Football of Basketball 
        // minimaal 0, maximaal 4
        "Swimming",
        "Running"
    ],
    "location": {
        "country": "Seychelles", // land
        "coordinates": { // GPS coördinaten
            "latitude": -89.945,
            "longitude": -122.5434
        }
    },
    "friends": [ // vrienden: minimaal 0, maximaal 3
        {
            "married": false, // getrouwd: true of false
            "favoriteFood": "Apple", // favoriete eten: Apple, Banana of Mango
            "age": 59, // leeftijd: 18 t/m 105
            "name": {
                "first": "Lura", // voornaam
                "last": "Schmitt" // achternaam
            },
            "hobbies": [ // mogelijke hobbies: Swimming, Running, Football of Basketball 
                // minimaal 0, maximaal 4
                "Running",
                "Swimming",
                "Basketball",
                "Football"
            ],
            "location": {
                "country": "Costa Rica", // land
                "coordinates": { // GPS coördinaten
                    "latitude": -19.6805,
                    "longitude": 17.0832
                }
            }
        }
    ]
};