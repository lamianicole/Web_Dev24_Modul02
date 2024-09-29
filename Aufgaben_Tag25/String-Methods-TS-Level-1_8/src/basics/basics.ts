const whereIsSam:string = "Sam is going to school";
console.log(whereIsSam);

console.log(whereIsSam.toUpperCase());
// output: SAM IS GOING TO SCHOOL
// Klammer bleibt hier leer

console.log(whereIsSam.toLowerCase());
// output: sam is going to school
// Klammer bleibt hier leer


// Kombination von toUpperCase mit substring:
console.log(whereIsSam.toUpperCase().substring(0, 4)+ whereIsSam.toLowerCase().substring(4, 15)+ whereIsSam.toUpperCase().substring(15));
// output: SAM is going to SCHOOL

// Auch das möglich:
console.log(`${whereIsSam.substring(0, 3).toUpperCase()} ${whereIsSam.substring(4, 15)} ${whereIsSam.substring(16).toUpperCase()}`);
// output: SAM is going to SCHOOL


console.log(whereIsSam.toLowerCase().substring(0, 4)+ whereIsSam.toUpperCase().substring(4, 15)+ whereIsSam.toLowerCase().substring(15));
// output: sam IS GOING TO school

// Auch das möglich
console.log(`${whereIsSam.substring(0, 3).toLowerCase()} ${whereIsSam.substring(4, 15).toUpperCase()} ${whereIsSam.substring(16)}`);
// output: sam IS GOING TO school

// Sam Is Going To School - hierfür Kombination mit replace, jeder first char groß:
// console.log(whereIsSam + whereIsSam.toUpperCase().replace("is", "Is")+ whereIsSam.toUpperCase().replace("going", "Going")
// console.log(whereIsSam.replace("Sam is going to school", "Sam Is Going To School"))
// Was ist hier der einfachste Weg? So ergibt es ja keinen Sinn...charAt?


