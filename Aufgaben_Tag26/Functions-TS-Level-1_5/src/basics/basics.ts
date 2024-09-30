function multiplyAndDivide(num1: number, num2: number){ 
    console.log("Multiplikation der beiden Parameter: " + num1 * num2);
    console.log("Division der beiden Parameter: " + num1 / num2);
    if (num2 === 0){
        console.log("Division durch 0 nicht erlaubt");
    }
};
multiplyAndDivide(10,0);
multiplyAndDivide(100, 100);
multiplyAndDivide(5,0); 
multiplyAndDivide(45,173)
multiplyAndDivide(1,1000);
;

// Multiplikation der beiden Parameter: 0
// Division der beiden Parameter: Infinity
// Division durch 0 nicht erlaubt
// Multiplikation der beiden Parameter: 10000
// Division der beiden Parameter: 1
// Multiplikation der beiden Parameter: 0
// Division der beiden Parameter: Infinity
// Division durch 0 nicht erlaubt
// Multiplikation der beiden Parameter: 7785
// Division der beiden Parameter: 0.26011560693641617
// Multiplikation der beiden Parameter: 1000
// Division der beiden Parameter: 0.001

// (*Infinity: Description
// Infinity is a number that represents positive infinity. A number reaches Infinity when it exceeds the upper limit for a number: 1.797693134862315E+308.)