const greetUser = (): void => {
    try {
    const userName = window.prompt("Bitte gib deinen Benutzernamen ein"); 
    if (userName === null) { 
        throw new Error ("Es wurde kein Benutzername eingegeben");
    }
    console.log(`Willkommen ${userName}`);
    } catch (err) {
    console.log("Schönen Tag");
    }
};

greetUser();
// Frage zum Code: Wenn ich keinen Namen eingebe und OK drücke, kommt: "Willkommen" (ohne userName).
// Ich hätte hier aber "Es wurde kein Benutzername eingegeben" erwartet, was stimmt nicht? Oder soll es gar nicht angezeigt werden? (weil kein console-log, sondern throw new Error? Es ist also nur intern für mich der Name des Fehlers?)
// Wenn ich auf Abbrechen klicke (mit oder ohne userName), kommt: "Schönen Tag"
//  Muss noch eine finally-Zeile rein? Aufgabe irgendwie doch nicht so klar


// Code-Erklärung für eigenes Verständnis:
// const greetUser = (): void => {
    // Der Code im try-Block wird ausgeführt und fängt mögliche Fehler ab.
//     try {
    // window.prompt öffnet das Eingabefeld, in das der Benutzer seinen Namen eingeben kann.
//     const userName = window.prompt("Bitte gib deinen Benutzernamen ein"); 
    // Wenn der Benutzer auf "Abbrechen" klickt oder keinen Namen eingibt, wird ein Fehler ausgelöst.
//     if (userName === null) { 
    // Löst einen Fehler aus, wenn kein Benutzername eingegeben wurde.
//         throw new Error ("Es wurde kein Benutzername eingegeben");
//     }
//     console.log(`Willkommen ${userName}`);
    // Im catch-Block wird der Fehler abgefangen und die Nachricht "Schönen Tag" in der Konsole ausgegeben, wenn ein Fehler auftritt.
//     } catch (err) {
//     console.log("Schönen Tag");
//     }
// };
