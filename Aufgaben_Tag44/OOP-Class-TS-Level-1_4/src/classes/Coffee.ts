import Beverage from "./Beverage";

export enum Type {
    Espresso,
    Latte,
    Cappuccino,
    Americano
}

class Coffee extends Beverage {
    _type: Type;

    constructor(name: string, price: number, type: Type) {
        super(name, price);
        this._type = type;
    }
}

export default Coffee;