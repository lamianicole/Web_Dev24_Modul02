function showHero(heroName: string, heroPower: string, heroEnemy: string){
    let nameOutput: string = "Mein:e Lieblingsheld:in ist:  " + heroName + ". ";
    let powerOutput: string = "Er/sie hat die Fähigkeit: " + heroPower + ". ";
    let enemyOutput: string = "Sein/Ihr größte/r Gegner:in ist: " + heroEnemy + ".";
    console.log(nameOutput + powerOutput + enemyOutput);
}
showHero("Takeshi" , "Castle-Besitzer und hat eine Armee" , "General Hayato Tani und seine Spielshowteilnehmer");
