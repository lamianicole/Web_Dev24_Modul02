const greetUser = (): void => {
    try {
    const userName = window.prompt("Bitte gib deinen Benutzernamen ein"); 
    if (!userName || userName.length === 0) { 
        throw new Error ("Es wurde kein Benutzername eingegeben");
    }
    console.log(`Willkommen ${userName}`);
    // catch (err): err ist der Parameter, der gezogen wird von der throw new Error Zeile, also Platzhalter für den Text: "Es wurde kein Benutzername eingegeben". Der catch fängt den error/catch, der wird aber erst bei console.log aufgerufen bzw. bei console.error(err). Unterschied: console.log zeigt es in der Konsole, bei console.error wird es in der Konsole rot hinterlegt und wird sichtbarer als Fehlermeldung
    } catch (err) {
        const divElement = document.createElement("div") as HTMLDivElement;
        divElement.textContent = err;
        document.body.appendChild(divElement);
    console.error(err);
    }
};

greetUser();




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
