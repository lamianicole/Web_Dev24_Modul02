// Verwende den Befehl substring(), um die gewünschten Zeichenketten zu erhalten.

const whereIsSusi: string = 'Susi is back from codingschool';
console.log(whereIsSusi.substring(0, 4));
// ergibt: Susi. Position 0 bis einschl. 3 und 4 ist die Leerstelle, endet dort. Index 0 

console.log(whereIsSusi.substring(5, 7));
// ergibt: is. Position 5 bis 7. 5 bis 6 = is. 7 = Leerzeichen = End position

console.log(whereIsSusi.substring(24));
// ergibt: school. Wenn Endwert nicht angegeben, rest of string, also: school

// console.log(whereIsSusi.substring(0, 7)+(24));
// so eine Addition mit substring geht nicht...
console.log(whereIsSusi.substring( 0, 7) + " " + whereIsSusi.substring(24));
// output: Susi is school. Das geht also

console.log(whereIsSusi.slice(0, 7) + " " + whereIsSusi.slice(24));
// output: Susi is school. Das geht also auch so mit slice

// console.log(whereIsSusi.concat(0, 7) + " " + whereIsSusi.concat(24));
// output: Susi is back from codingschool07 
// Susi is back from codingschool24
// das schreibt man mit concat nicht so

console.log(whereIsSusi.substring(0, 7).concat(" ", whereIsSusi.substring(24)));
// output: Susi is school. So mit concat, aber slice leichter zu verstehen









