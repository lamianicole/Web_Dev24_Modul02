const addToFifty = (): void => {
    let sum = 0;

    // for-Schleife schreiben mit Initialisierung und Inkrementierung im Schleifenkopf. Schleife startet mit randomNumber auf 0 gesetzt
    for (let randomNumber = 0; sum <= 50; sum += randomNumber) {
        // Zufallszahl zwischen 1 und 10 generieren
        randomNumber = Math.floor(Math.random() * 10) + 1;
        // Zufallszahl auf der Konsole ausgeben
        console.log("Zufallszahl: " + randomNumber);
    }

// Ergebnis ausgeben
console.log(sum + " > 50. Stopping right here.");
}

// Funktion aufrufen
addToFifty();








// Erklärung für mich wg. Verwirrung um Zeile 5 Start mit 0 statt 1:
// Warum randomNumber auf 0 gesetzt ist:
// Initialisierung: let randomNumber = 0 ist einfach die Initialisierung der Variable im for-Schleifenkopf. Es startet die Schleife, bevor irgendeine Zufallszahl generiert wurde.
// Vermeidung von Fehlern: Da randomNumber vor der Schleife initialisiert wird und erst innerhalb der Schleife Werte zwischen 1 und 10 erhält, ist es auf 0 gesetzt, um sicherzustellen, dass keine unerwünschten Effekte auftreten.
// Kontrolle des Schleifenstarts: Wenn randomNumber auf 1 gesetzt wäre, würde sum bereits bei 1 beginnen, bevor die Schleife überhaupt läuft. Dies würde zu falschen Ergebnissen führen, da die Schleife die Anzahl der Iterationen beeinflussen würde.

// Ablauf der Schleife:
// Initialisierung: let randomNumber = 0 — Am Anfang der Schleife ist randomNumber 0.
// Bedingung: sum <= 50 — Die Schleife läuft, solange die Summe sum kleiner oder gleich 50 ist.
// Inkrementierung: sum += randomNumber — Nach jeder Iteration wird randomNumber zur Summe sum hinzugefügt.