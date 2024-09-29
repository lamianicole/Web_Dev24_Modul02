// Um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten, kannst du den Befehl [search()](https://www.w3schools.com/jsref/jsref%5Fsearch.asp) verwenden.
// Übernehme folgende Variable: let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

let oceanQuote: string = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

// Suche die Position des Zeichens ";" in der Variablen oceanQuote.
console.log(oceanQuote.search(";"));
// ergibt 34. Das ist nur die erste Erwähnung!

// Suche die Position des Zeichens "green" in der Variablen oceanQuote.
console.log(oceanQuote.search("green"));
// ergibt 6 

// Suche die Position des Zeichens "blue" in der Variablen oceanQuote.
console.log(oceanQuote.search("blue"));
// ergibt -1, denn ist nicht vorhanden



