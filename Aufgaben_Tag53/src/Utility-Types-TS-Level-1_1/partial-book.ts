import { IBook } from './IBook'
import { IPartialIBook } from './IPartialBook';
import { TBasicIBook } from './basic-book';
import { IBasicBook } from './IBasicBook';
import { TRequiredBook } from './required-book';
import { IRequiredBook } from './IRequiredBook';
import { TReadOnlyBook } from './readonly-books';
import { IReadOnlyBook } from './IReadOnlyBook';
import { IDonkey } from './IDonkey';
import { Donkey } from './IDonkey';

// Erstelle dort einen neuen Type PartialBook basierend auf IBook
type TPartialIBook = Partial<IBook>;

// Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
const partialIBook: TPartialIBook = {
    author: "Sammy Stone",
    name: "Stones"
};
console.log(partialIBook);


// Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name
const partialIBook2: IPartialIBook = {
    name: "Sunrises"
}
console.log(partialIBook2);


// Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften
const basicBook: TBasicIBook = {
    author: "Cloudy Cloud",
    name: "Clouds and thunderstorms",
    numberOfPages: 1050
};
console.log(basicBook);

// Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften
const basicBook2: TBasicIBook = {
    author: "Sunny Sunshine", 
    name: "Thousands of Sunshines", numberOfPages: 300
}
console.log(basicBook2);


// Erstelle dort einen neuen Type RequiredBook basierend auf IBook
const requiredBook: TRequiredBook = {
    author: "Icy Ice",
    name: "Ice shells",
    publishingYear: "1997", shortDescription: "Everything about Ice shells", 
    numberOfPages: 223
}
console.log(requiredBook);

// Lege eine Variable requiredBook2 vom Typ IRequiredBook an und vergebe alle nötigen Eigenschaften
const requiredBook2: IRequiredBook = { author: "Ocean Atlantic", 
name: "Oceans", 
publishingYear: "2024", 
shortDescription: "About Oceans", 
numberOfPages: 328 };
console.log(requiredBook2);

// Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergib alle nötigen Eigenschaften und Werte
const readonlyBook: TReadOnlyBook = { 
    author: "Pat Pat", 
    name: "Pat", 
    publishingYear: "2021", 
    shortDescription: "About Pat", 
    numberOfPages: 223 
};
console.log(readonlyBook);
// Versuche nachträglich, Werte zu setzen (geht natürlich nicht, da es schreibgeschützt ist


// Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergib alle nötigen Eigenschaften und Werte
const readonlyBook2: IReadOnlyBook = { 
    author: "Snowy Snow", 
    name: "Snow", 
    publishingYear: "1998", 
    shortDescription: "About Snow", 
    numberOfPages: 328 
};
console.log(readonlyBook2);
// Versuche nachträglich, Werte zu setzen (Das geht natürlich nicht, da es schreibgeschützt ist. Versuch, eine schreibgeschützte Eigenschaft zu ändern > Fehlermeldung)


// Erstelle einen Record vom Typ <Donkey, IDonkey> mit fünf Einträgen
const donkeys: Record<Donkey, IDonkey> = { 
    [Donkey.Daisy]: { 
        name: "Daisy", 
        age: 5, 
        fluffyness: 8, 
        favoriteFood: "Carrots" 
    }, 
    [Donkey.Gus]: { 
        name: "Gus", 
        age: 3, 
        fluffyness: 9, 
        favoriteFood: "Apples" 
    }, 
    [Donkey.Rosie]: { 
        name: "Rosie", 
        age: 4, 
        fluffyness: 10, 
        favoriteFood: "Hay" 
    }, 
    [Donkey.Coco]: {
        name: "Coco", 
        age: 2, 
        fluffyness: 7, 
        favoriteFood: "Grass" 
    }, 
    [Donkey.Jasper]: { 
        name: "Jasper", 
        age: 6, 
        fluffyness: 6,
        favoriteFood: "Oats" 
    } 
};
console.log(donkeys);
