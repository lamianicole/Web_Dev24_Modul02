class Alien {
    public _name: string;
    public _planet: string;
    public _galaxy: string;
    private _color: string;
    
    get color() {
        return this._color;
    }

    constructor(name: string, planet: string, galaxy: string, color: string) {
        this._name = name;
        this._planet = planet;
        this._galaxy = galaxy;
        this._color = color;
    }
}

export default Alien;