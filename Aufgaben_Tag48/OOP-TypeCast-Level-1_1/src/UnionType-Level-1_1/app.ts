// Erstelle dort einen Union Type namens Result mit den Werten "success", "error" und "pending"
type TResult = "success" | "error" | "pending";

// Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu
const result1: TResult = "success";

// Schreibe eine Funktion handleResult, die einen Parameter(placeholder) vom Typ Result akzeptiert. 
const handleResult = (placeholder: TResult) => {
    console.log(`The result is: ${placeholder}`);
}

handleResult(result1);

const result2: TResult = "error";
const result3: TResult = "pending";

handleResult(result2);
handleResult(result3);