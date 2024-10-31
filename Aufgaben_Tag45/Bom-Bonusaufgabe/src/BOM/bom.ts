// DOM-Elemente abrufen und Typen zuweisen

// Zeitvariable

// EventListener für den Start-Button
// (alles, was vom Browser kommt, ist string, deshalb Umwandlung in number erforderlich)
// mit einer Abfrage sicherstellen, dass User keine Minuswerte in Maske eingeibt, also > 0
// später muss ich number wieder in string zurückwandeln, sonst kommt innerText nicht damit zurecht, also toString

// hier wird Variante gezeigt, wo ich function displayTime als eigene Funktion statt verschachteln in anderer schreibe, diese function nur aber an der richtigen Stelle aufrufe, wichtig! so ist Code sauberer. Es ergibt immer Sinn, eine eigenständige Funktion zu schreiben. Lieber mehrere kleine Funktionen schreiben und diese dann mehrfach verwenden, indem ich sie einfach nur noch an passender Stelle aufrufe.
// padStart bestimmt die Anzahl/Posotion(?) der Nullen in der Countdown-Zeitangabe: 00:00

// pause-Button: wenn ich draufklicke, pausieren. Wenn ich wieder draufdrücke, gehts weiter
// Dafür brauche ich boolean. Umkehren (!isPaused) geht nur bei boolean. Boolean darf nicht unterschätzt werden, mit am häufigsten gebraucht
let isPaused: boolean = false;
pauseElement.addEventListener

// EventListener für den Restart Button:
// ich brauche noch mal die Variable const inputMinutesVariable, ansonsten wurde fast das Gleiche wie oben kopiert bei Start Countdown Button

// reset button: einfach alles zurücksetzen

//  Idee Andre, in ein array setzen, numbersArray

