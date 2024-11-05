import IStudent from "./IStudent";

// Schreibe dort eine Funktion processStudent(student: IStudent) an
// Die Funktion gibt “Processing [student.name] …” auf der Konsole aus
const processStudent = (student: IStudent): void => { 
    console.log(`Processing ${ student._name } ...`); 
};

// Lege ein Objekt student1 mit den Eigenschaften name und age an
// Wandle das Objekt mit as in IStudent um
let student1 = { 
    _name: "Max", 
    _age: 22 
} as IStudent;

// Übergib das Objekt an die Funktion processStudent
processStudent(student1);


// Lege ein zweites Objekt student2 mit der Eigenschaft age an
//  Wandle das Objekt in einen IStudent um
let student2 = {
    _age: 21
} as IStudent;

//  Übergib das Objekt an die Funktion processStudent
processStudent(student2);

//  Schreib in einen Code-Kommentar, was im zweiten Fall angezeigt/ausgegeben wird
// Konsole gibt aus: Processing undefined

// Mögliche Erklärung: In der Funktion oben steht, dass der name ausgegeben werden soll: 
// console.log(`Processing ${ student._name } ...`);
// Würde dort age stehen, kämen 22 und 21 raus

