// Befehl concat() 
const infoAboutSam = "Sam is going to codingschool";
console.log(infoAboutSam);

const susi = "Susi"; 
console.log(susi);

const and = "and";
console.log(and);


// Sam is going to school and to the movie theater
console.log(infoAboutSam.replace("codingschool", "school").concat(and).concat(" to the movie theater"));

// Sam is going to the movie theater
console.log(infoAboutSam.replace("codingschool", "the movie theater"));

// noch machen
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater