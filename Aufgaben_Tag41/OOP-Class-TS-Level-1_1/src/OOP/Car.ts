class Car {
    _brand: string;
    _constructionYear: number;
    _currentSpeed: string;


    constructor(brand: string, constructionYear: number, currentSpeed: string) {
        this._brand = brand;
        this._constructionYear = constructionYear;
        this._currentSpeed = currentSpeed;
    }
}

export default Car;