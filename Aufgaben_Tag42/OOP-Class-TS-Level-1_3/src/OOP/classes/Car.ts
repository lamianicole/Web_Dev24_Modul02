import Driver from "./Driver";
import CarTypeTwo from "./CarTypeTwo";

//  Level 1_13
class Car {
    _brand: string;
    private _constructionYear: number;
    _currentSpeed: number;
    _carType: CarTypeTwo;

    constructor(brand: string, constructionYear: number, currentSpeed: number) {
        this._brand = brand;
        this._constructionYear = constructionYear;
        this._currentSpeed = currentSpeed;
        this._carType = carType;
    }

    get constructionYear() {
        return this._constructionYear;
    }

    // Methode getSpeedInfo() erstellen
    getSpeedInfo(): string {
        if(this._currentSpeed <= 40){
            return "Driving slowly";
        }else if(this._currentSpeed > 40 && this._currentSpeed <= 70){
            return "Driving normally";
        }else if(this._currentSpeed > 70 && this._currentSpeed <= 120){
            return "Driving fast";
        }else if(this._currentSpeed > 120 && this._currentSpeed <= 190){
            return "Driving really fast";
        }else if(this._currentSpeed > 190){
            return "WTF"
            }else{
                return "Are you insane?";
            }
    
    // Methode getCarType
    getCarType(): CarTypeTwo {
    return this._carType;
    }
}
}


export default Car;