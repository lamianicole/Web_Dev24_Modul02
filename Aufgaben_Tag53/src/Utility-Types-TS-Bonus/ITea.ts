interface ITea {
    name: string; 
    type: string; 
    temperature: number; 
    ingredients: string[]; 
}

// utility types erstellen
type TOmitTea = Omit<ITea, 'temperature' | 'ingredients'>; 
type TPickTea = Pick<ITea, 'name' | 'type'>;
type TRequiredTea = Required<ITea>; 
type TReadonlyTea = Readonly<ITea>;


// Objekte für jeden Typ anlegen
const omitTea: TOmitTea = {
    name: 'Green Tea',
    type: 'Green'
};

const pickTea: TPickTea = {
    name: 'Black Tea',
    type: 'Black'
};

const requiredTea: TRequiredTea = {
    name: 'Rooibos Tea',
    type: 'Rooibos',
    temperature: 80,
    ingredients: ['Rooibos leaves']
};

const readonlyTea: TReadonlyTea = {
    name: 'Peppermint Tea',
    type: 'Peppermint',
    temperature: 90,
    ingredients: ['Peppermint leaves']
};

// Funktion prepareTea erstellen und Objekte übergeben
function prepareTea(tea: ITea): void {
    console.log(`Preparing ${tea.name} of type ${tea.type} at ${tea.temperature}°C with ingredients: ${tea.ingredients.join(', ')}`);
}

// Objekte an prepareTea übergeben (Hier benutzen wir requiredTea und readonlyTea, da sie alle Eigenschaften von ITea haben)
prepareTea(requiredTea);
prepareTea(readonlyTea);

// type TTeaType erstellen
type TTeaType = 'Green' | 'Black' | 'Rooibos' | 'Peppermint' | 'Oolong' | 'Sencha' | 'Chamomile';

// types TTeaTypeCaffeine und TTeaTypeNoCaffeine mit Exclude erstellen
type TTeaTypeCaffeine = Exclude<TTeaType, 'Rooibos' | 'Peppermint' | 'Chamomile'>;
type TTeaTypeNoCaffeine = Exclude<TTeaType, 'Green' | 'Black' | 'Oolong' | 'Sencha'>;

// Klasse Tea erstellen, die ITea implementiert
class Tea implements ITea {
    name: string;
    type: TTeaType;
    temperature: number;
    ingredients: string[];

    constructor(name: string, type: TTeaType, temperature: number, ingredients: string[]) {
        this.name = name;
        this.type = type;
        this.temperature = temperature;
        this.ingredients = ingredients;
    }
}

// class CaffeineTea erstellen, die von Tea ableitet
class CaffeineTea extends Tea {
    type: TTeaTypeCaffeine;

    constructor(name: string, type: TTeaTypeCaffeine, temperature: number, ingredients: string[]) {
        super(name, type, temperature, ingredients);
        this.type = type;
    }
}

// Beispiel für die Verwendung der classes
const greenTea = new CaffeineTea('Green Tea', 'Green', 80, ['Green tea leaves']);
console.log(greenTea);
