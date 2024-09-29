const earthQuote: string = "How inappropriate to call this planet Earth, when clearly it is Ocean."

// Suche nun die Position des Zeichens "h" in der Variablen earthQuote. Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.
console.log(earthQuote.indexOf("h"));
// ergibt 27

// Suche im Anschluss die Position des Zeichens "Earth" in der Variablen earthQuote.
console.log(earthQuote.indexOf("Earth"));
// ergibt 38

// Position des Zeichens "Moon" in der Variablen earthQuote suchen.
console.log(earthQuote.indexOf("Moon"));
// ergibt -1
// -1 bedeutet, Wort "Moon" ist nicht enthalten
