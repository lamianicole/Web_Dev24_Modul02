// Array-Deklaration und Ausgabe in Console
let words: string[] = ["hallo", "Auto", "Waschmaschine", "Schrank", "Katze", "Beispiel", "Eltern", "Fenster", "Geburtstag", "Himmel", "schwimmen", "Zeitung"];
console.log(words);

// HTML-Elemente holen und nach Typ casten
let newWord = document.querySelector ('#newWord') as HTMLInputElement;
let hinzuBtn = document.querySelector ('#hinzuBtn') as HTMLInputElement;
let wortlaenge = document.querySelector ('#wortlaenge') as HTMLInputElement;
let filternBtn = document.querySelector ('#filternBtn') as HTMLInputElement;
let output = document.querySelector ('#output') as HTMLElement;

console.log(newWord);
console.log(hinzuBtn);
console.log(wortlaenge);
console.log(filternBtn);
console.log(output);

// Kopieren des Arrays words
let newVersionWords: string[] = words.map((elt) => elt);

// Funktion zum Rendern der Liste: renderList leert den Inhalt des output-Elements und fügt für jedes Wort im Array ein neues <p>-Element hinzu
const renderList = (Arr: string[]) => {
  output.innerHTML = "";
  Arr?.forEach((word: string) => {
    output.innerHTML += `<p>${word}</p>`;
  });
};

// click Event Listener für filternBtn: Arrow function
filternBtn.addEventListener("click", () => {
    newVersionWords = words.filter(
    (word) => word.length === Number(wortlaenge.value)
  );
  renderList(newVersionWords);
});
// Fügt click Event Listener zum filternBtn hinzu. Filtert das words Array basierend auf der eingegebenen Wortlänge und rendert die gefilterte Liste

// click Event Listener für hinzuBtn: Arrow function
hinzuBtn.addEventListener("click", () => {
  words.push(newWord.value);
});
// Fügt click Event Listener zum hinzuBtn hinzu. Fügt das neue Wort dem words Array hinzu.




// Wiederholung zu map(), Zeile 19:
// words.map((elt) => elt): Die map-Methode durchläuft jedes Element des Arrays words.
// elt: Repräsentiert das aktuelle Element, das in dieser Iteration der Schleife verarbeitet wird.
// elt => elt: Sagt aus, dass jedes Element elt im neuen Array genauso sein soll wie im alten Array. Es kopiert im Grunde jedes Element aus words in newVersionWords.
// Das Ergebnis ist ein neues Array newVersionWords, das exakt dieselben Elemente wie words enthält.
// Es ist also einfach ein Platzhalter, um auf das aktuelle Element im Array zuzugreifen