class IceCreamFlavor {
    _name: string = '';
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined

constructor(name: string, price: number, isPopular: boolean, description?: string) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
}

// Methode 1: Gesamtsumme an Eiskugeln
// diese anpassen an Farids Variante: wir brauchen return wert statt console.log, weil wir mit dem Wert noch weiterarbeiten (später mit den Karten, number ergänzen!)
getTotalPrice(numberOfScoops: number){
    console.log(numberOfScoops * this._price);
}

// Methode 2: gibt optionalen Beschreibungstext aus
printInfo(): void{
    console.log(`Flavor ${this._name} is popular and costs ${this._price} Euro.`);  
}
// Farids Variante mit ternary operator beachten: is popular

// Methode 3:
// gib die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist (description ist hier optional)
getLengthOfDescription(){
    const length = this._description?.length
    if(this._description){
        console.log(length);
    }else{
        console.log("0");
    }
    }
}

// Farids Variante: 
// getLengthOfDescription(){
    if (this._desc) {
        console.log(this._desc.length);
    } else {

    }


export default IceCreamFlavor