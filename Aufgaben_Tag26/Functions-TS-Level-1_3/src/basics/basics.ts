// - Deklariere die Funktion showPersonInfo() mit drei Parametern
    // - name (string)
    // - city (string)
    // - age (number)
// Gib unter Verwendung der entsprechenden Argumente folgenden Satz in der Konsole aus: "Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf."

function showPersonInfo(name: string, city: string, age: number) 
{console.log(`Hallo, mein Name ist ${name}. Ich bin ${age.toFixed(0)} Jahre alt. Ich komme aus ${city}.`);
      }

// Verwende deine persönlichen Daten oder fiktive Daten.
showPersonInfo("Lamia", "Köln", 40);