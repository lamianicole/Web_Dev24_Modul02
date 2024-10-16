// Definiere ein Enum HtmlError mit folgenden HTML-Error-Codes
enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

// Schreibe eine Funktion showHtmlError()
// Lass dir in der Funktion mit Math.random zufällige Zahlen zwischen 0 und 5 generieren
// Ist der Wert 0, 1 oder 2, gibt den HtmlError.OK aus
// Ist der Wert 3, gibt HtmlError.Redirect aus
// Ist der Wert 4, gibt HtmlError.BadRequest aus
// Ist der Wert 5, gibt HtmlError.InternalServerError aus
const showHtmlError = () => {
    let randomNumber = Math.ceil(Math.random() * 5);
    switch (true) {
        case randomNumber <= 2:
        console.log(HtmlError.OK);
        break;
        case randomNumber === 3:
        console.log(HtmlError.Redirect);
        break;
        case randomNumber === 4:
        console.log(HtmlError.BadRequest);
        break;
        case randomNumber === 5:
        console.log(HtmlError.InternalServerError);
        break;
    }
};

showHtmlError();


// Reminder Zufallszahl generieren:
// Math.random() * 5: generiert eine Zufallszahl zwischen 0 und 5 (exklusive!)
// Math.ceil(...): rundet die Zahl auf die nächste Ganzzahl auf, Ergebnis ist eine Zahl zwischen 1 und 5 (inklusive!)
