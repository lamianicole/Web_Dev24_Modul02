// Aufgabe: Array-TS-Level-1_10 (split)

// const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

// console.log(futuramaQuote);

// Sätze stückeln
// const futuramaQuoteArr = futuramaQuote.split(".");
// console.log(futuramaQuoteArr);
// (6) ["It's okay, Bender", ' I like cooking too', " Oh, you're a dollar naughtier than most", " My fellow Earthicans, as I have explained in my b…', we need to defend our planet against pollution", ' Also dark wizards', '']

// const futuramaQuoteArrZwei = futuramaQuote.split(" ");
// console.log(futuramaQuoteArrZwei);
// (51) ["It's", 'okay,', 'Bender.', 'I', 'like', 'cooking', 'too.', 'Oh,', "you're", 'a', 'dollar', 'naughtier', 'than', 'most.', 'My', 'fellow', 'Earthicans,', 'as', 'I', 'have', 'explained', 'in', 'my', 'book', "'Earth", 'in', 'the', "Balance',", 'and', 'the', 'much', 'more', 'popular', "'Harry", 'Potter', 'and', 'the', 'Balance', 'of', "Earth',", 'we', 'need', 'to', 'defend', 'our', 'planet', 'against', 'pollution.', 'Also', 'dark', 'wizards.']

// const futuramaQuuoteArrDrei = futuramaQuote.split("");
// console.log(futuramaQuuoteArrDrei);
// (290) ['I', 't', "'", 's', ' ', 'o', 'k', 'a', 'y', ',', ' ', 'B', 'e', 'n', 'd', 'e', 'r', '.', ' ', 'I', ' ', 'l', 'i', 'k', 'e', ' ', 'c', 'o', 'o', 'k', 'i', 'n', 'g', ' ', 't', 'o', 'o', '.', ' ', 'O', 'h', ',', ' ', 'y', 'o', 'u', "'", 'r', 'e', ' ', 'a', ' ', 'd', 'o', 'l', 'l', 'a', 'r', ' ', 'n', 'a', 'u', 'g', 'h', 't', 'i', 'e', 'r', ' ', 't', 'h', 'a', 'n', ' ', 'm', 'o', 's', 't', '.', ' ', 'M', 'y', ' ', 'f', 'e', 'l', 'l', 'o', 'w', ' ', 'E', 'a', 'r', 't', 'h', 'i', 'c', 'a', 'n', 's', …]



// Aufgabe: Array-TS-Level-1_11 (includes)

// let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
// console.log(string);

// console.log(string.includes("Piper"));
// ergibt: true
// console.log(string.includes("piper"));
// ergibt: false

// oder mit Variablen erstellen:
// let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
// let word: string = "Piper";
// console.log(string.includes(word));
// ergibt: true

// Bei der Suche nach “Piper” und "piper" zeigt sich, dass die includes() Methode case sensitive ist. 
// Nutze deshalb eine weitere Methode um dies zu umgehen:

// Versuch mit toLowerCase() oder toUpperCase()
// let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
// console.log(string);
// const word: string = "Piper";
// console.log(string.includes(word));
// ergibt: true
// const word: string = "piper";
// console.log(string.includes(word));
// ergibt: false
// console.log(string.toLowerCase().includes(word.toLowerCase()));
// ergibt: true
// const word: string = "PIPER";
// console.log(string.toLowerCase().includes(word.toLowerCase()));
// ergibt: true

// Versuch mit index:
// let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
// console.log(string);

// let word: string = "peck";
// console.log(word);

// console.log(string.includes(word, 21));
// ergibt: true
// console.log(string.includes(word, 78));
// ergibt: false
// console.log(string.includes(word, 2));
// ergibt: true. Hier hätte doch false herauskommen müssen? Ergibt keinen Sinn...Was ist hier verkehrt??


// Aufgabe Array-TS-Sort-Level-2_1

// Schreibe ein kleines Programm, das Zeichenketten umkehrt. Diese Function soll jeden String, der ihr als Parameter übergeben wird umdrehen können. Du wirst Array-Methoden verwenden müssen, um den String umzudrehen. Rufe die Function mit deinem Namen als Parameter auf. Überprüfe das Ergebnis in der Konsole.
// const array: string = "Lamia";
// console.log(array);
// const reversed: string = [...array].reverse();
// console.log(reversed);
// // kommt zwar umgekehrt raus, aber gesplittet in Einzelbuchstaben. Das ist es wohl nicht, kann man die noch zusammenkleben mit was anderem?
// console.log(reversed.join(''));
// // Jetzt klebt es zusammen, wahrscheinlich zu umständlich


// const Sergio
// const Hannah
// - Regallager
// - Reliefpfeiler
// - Rentner










