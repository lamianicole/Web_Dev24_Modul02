type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

// das ist unser Objekt: unserLager
let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

// Cola
console.log(unserLager.schrank["Untere Schublade"]);

// Hefter
console.log(unserLager.schreibtisch.schublade);

// mit Methode getOwnPropertyNames():
// Accessing a Property: Object.getOwnPropertyDescriptor(object, property)
    // Geheimnisse
console.log(Object.getOwnPropertyNames(unserLager.schrank["Obere Schublade"])); // Ausgabe: ["Ordner1", "Ordner2"
console.log(unserLager.schrank["Obere Schublade"]["Ordner2"]); // Ausgabe: Geheimnisse
// Diese Methode ist aber im Vergleich doch umständlicher

// Cola
console.log(unserLager.schrank[Object.getOwnPropertyNames(unserLager.schrank)[1]]);

// Hefter
console.log(unserLager.schreibtisch[Object.getOwnPropertyNames(unserLager.schreibtisch)[0]]);
// Trotz der Problemmeldungen kommt aber jeweils das richtige Ergebnis raus, wüsste nicht, was man mit dieser Methode anders machen kann






