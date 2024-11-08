function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
      // ? Zahl darf nicht hoeher als 50 sein
      if (numberOfWords > 50) {
        reject("Number of words cannot exceed 50")
      } else {
        const loremIpsum =
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        const wordsArray = loremIpsum.split(" ").slice(0, numberOfWords)
        resolve(wordsArray)
      }
    })
  }
  
  // - alles in Großbuchstaben umwandeln
  // - Entferne alle 'L' , ‘T’ und ‘U’ aus jedem Wort
  // - Filtere alle Wörter heraus, die länger als 8 Zeichen sind.
  // - Kombiniere die verbleibenden Wörter zu einem einzigen String und gib ihn auf der Konsole aus.
  // - Fange eventuelle Fehler ab und gib sie auf der Konsole aus.
  
  generateLoremIpsum(5)
    .then((words) => words.map((word) => word.toUpperCase()))
    .then((words) =>
      words.map((word) => word.split("L").join("").split("T").join("").split("U").join("").split(",").join(""))
    )
    // .then((words) => words.map((word) => word.replace(/[LTU]/g, "")))
    .then((words) => words.filter((word) => word.length <= 8))
    .then((words) => words.join(" "))
    .then((result) => console.log(result))
    .catch((error) => console.error(error))



