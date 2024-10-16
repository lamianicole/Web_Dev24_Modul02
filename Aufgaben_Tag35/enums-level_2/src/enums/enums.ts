// Level-2_1
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



// Level-2_2
// Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen

// Definiere ein enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
// Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila und Grau
// Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z.B. Gelb = #FFFF00)
enum ClothingColor {
    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF",
    Lila = "#800080",
    Grau = "#808080",
}

type Color = {
    name: string;
    hexColorValue: string;
};

// Lege dir ein Array mit allen Farben an: allColors: Color[]
const allColors: Color[] = [
    { name: "Gelb", hexColorValue: ClothingColor.Gelb },
    { name: "Orange", hexColorValue: ClothingColor.Orange },
    { name: "Pink", hexColorValue: ClothingColor.Pink },
    { name: "Blau", hexColorValue: ClothingColor.Blau },
    { name: "Lila", hexColorValue: ClothingColor.Lila },
    { name: "Grau", hexColorValue: ClothingColor.Grau },
];

// Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe
const buttonWrap = document.querySelector("#buttonWrap") as HTMLElement;
    allColors.forEach((color) => {
    buttonWrap.innerHTML += `<button style="background-color:${color.hexColorValue}">${color.name}</button>`;
});
