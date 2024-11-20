import { ISmoothie } from "./ISmoothie";
import { Size } from "./ISmoothie";
import { TBasicColors } from "./colors";
import { TRealColors } from "./colors";

// Erstelle eine Funktion customizeSmoothie, die ein Smoothie-Objekt (basicSmoothie) und ein Partial<ISmoothie>-Objekt (customizedSmoothie) als Parameter hat
// Die Funktion soll die Eigenschaften aus den beiden Objekten kombinieren
// Wenn eine Eigenschaft im customizedSmoothie gesetzt ist, soll sie die Eigenschaft im basicSmoothie überschreiben
// Rückgabewert der Funktion ist ISmoothie


// function unter Verwendung des Spread-Operators (kürzer, übersichtlicher)
function customizeSmoothie(
    basicSmoothie: ISmoothie, 
    customizedSmoothie: Partial<ISmoothie>): ISmoothie {
    return { ...basicSmoothie, ...customizedSmoothie };
}

// Erstellen von basicSmoothie-Objekt und customizedSmoothie-Objekt:
const basicSmoothie: ISmoothie = {
    name: "Fruity vegan mix",
    ingredients: ["banana", "cherry", "coconut milk", "coconut water"],
    size: Size.Small,
    price: 1.99
};

const customizedSmoothie1: Partial<ISmoothie> = {
    size: Size.Medium,
    price: 3.99
};

const combinedSmoothie = customizeSmoothie(basicSmoothie, customizedSmoothie1);

console.log(combinedSmoothie);



// Für mich zur Erklärung Funktion: 
// Die Funktion nimmt ein basicSmoothie-Objekt und ein customizedSmoothie-Objekt vom Typ Partial<ISmoothie> als Parameter.
// Die Eigenschaften des customizedSmoothie-Objekts überschreiben die Eigenschaften des basicSmoothie-Objekts, falls sie gesetzt sind.
// Die Funktion gibt ein kombiniertes ISmoothie-Objekt zurück:

// function customizeSmoothie(basicSmoothie: ISmoothie,  customizedSmoothie: Partial<ISmoothie>): ISmoothie {
//     return { ...basicSmoothie, ...customizedSmoothie };
// }

// ----------------------------
// Alternative function mit ternary operator (?) zur Überprüfung, ob die Eigenschaften im customizedSmoothie gesetzt sind, und überschreibt diese ggf. im basicSmoothie. ternery operator: bietet mehr Kontrolle und Klarheit
// function customizeSmoothie(
//     basicSmoothie: ISmoothie,
//     customizedSmoothie: Partial<ISmoothie>
//   ): ISmoothie {
//     const combinedSmoothie: ISmoothie = {
//       name: customizedSmoothie.name
//         ? customizedSmoothie.name
//         : basicSmoothie.name,
//       ingredients: customizedSmoothie.ingredients
//         ? customizedSmoothie.ingredients
//         : basicSmoothie.ingredients,
//       size: customizedSmoothie.size
//         ? customizedSmoothie.size
//         : basicSmoothie.size,
//       price: customizedSmoothie.price
//         ? customizedSmoothie.price
//         : basicSmoothie.price,
//     };

//     return combinedSmoothie;
//   }

// ----------------------------------



// Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an

function showColors(color: TRealColors): void {
    console.log(`Die gewählte Farbe ist: ${color}`);
}
// showColors("BLACK"); // Fehler: Argument vom Typ '"BLACK"' ist nicht zuweisbar an Parameter vom Typ 'RealColors'
showColors("RED"); // Ausgabe: Die gewählte Farbe ist: RED
showColors("BLUE"); // Ausgabe: Die gewählte Farbe ist: BLUE

// Versuch, "BLACK" zu übergeben, verursacht Typfehler, da "BLACK" nicht im Typ RealColors enthalten ist.
// Das Übergeben eines gültigen Werts wie "RED" oder "BLUE" funktioniert und gibt die gewählte Farbe auf der Konsole aus.

