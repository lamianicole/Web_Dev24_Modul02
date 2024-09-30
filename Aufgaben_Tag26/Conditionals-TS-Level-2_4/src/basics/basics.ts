function zufallszahlen(zahl1: number, zahl2: number){
    if(zahl1 === zahl2){
        console.log("Was für ein Zufall");
    }else if(zahl1 > zahl2){
            console.log("Erste Zahl größer");          
        }else{
            console.log("Zweite Zahl größer")
        }
    }
zufallszahlen(4, 73);
zufallszahlen(987, 5);
zufallszahlen(-9, 3);
zufallszahlen(2, 2);

// (zahl2 > zahl1) bleibt übrig, brauch ich nicht angeben