// Level-2_1

// 100 Dateinamen für Bilder ins Array
// Funktion createImageNames deklarieren
const createImageNames = (): string[] => {
    // Variable returnArray als leeres Array deklarieren
    let returnArray: string[] = [];
    // for-Schleife schreiben
    for (let i = 1; i <= 100; i++) {
      // Initialisieren des Dateinamens
        let fileName: string;

      // Conditional Statement, um die Anzahl der führenden Nullen zu bestimmen
    if (i < 10) {
        fileName = `image_00${i}.jpg`;
    } else if (i < 100) {
        fileName = `image_0${i}.jpg`;
    } else {
        fileName = `image_${i}.jpg`;
    }

      // Bildnamen ins Array schreiben mit push-Methode
    returnArray.push(fileName);
    }

    // Array mit den Dateinamen zurückgeben
    return returnArray;
};

  // Ergebnis auf der Konsole ausgeben
console.log(createImageNames());
