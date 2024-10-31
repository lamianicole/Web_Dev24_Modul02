import IShape from "../contracts/IShape";

class Rectangle implements IShape {
    _name: string;
    _color: string;
    _width: number;
    _height: number;
    _isRound?: boolean = false;

// Frage: Wieso funktioniert der isRound/Boolean-Teil nur, wenn ich ihn auf optional setze? Sonst gibt es Fehlermeldung, da ein Parameter zu viel, was sollte man hier tun, außer auf optional zu setzen?
    constructor(name: string, color: string, width: number, height: number, isRound?: boolean){
        this._name = name;
        this._color = color;
        this._width = width;
        this._height = height;
        this._isRound = isRound || false;
    }

    public draw(): void {
        console.log("Drawing rectangle");
    }
}


export default Rectangle;