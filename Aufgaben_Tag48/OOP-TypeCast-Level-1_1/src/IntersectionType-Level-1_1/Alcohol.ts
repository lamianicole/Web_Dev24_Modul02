type TAlcohol = {
    name: string; 
    percentage: number; 
    type: string;
}

type TMixer = {
    name: string; 
    type: string; 
    IsCarbonated: boolean;
}

type TCocktail = TAlcohol & TMixer;

// Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu
const rizkyFizzyBlizzy: TCocktail = {
    name: "Rizky Fizzy Blizzy",
    percentage: 33, 
    type: "Cocktail",
    IsCarbonated: true
}

console.log(rizkyFizzyBlizzy);