class Person{
    _name: string;
    _birthday: Date;
    _gender: Gender

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this.name = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this.name = this._gender;
    }

    get birthday(): Date {
        return this._birthday;
    }

    constructor(name: string, birthday: Date, gender: Gender){
        this._name = name;
        this._birthday = birthday;
        this._gender = gender;
}

const enum Gender {
    Female = "Female",
    Male = "Male",
    Diverse = "Diverse"
}


export default Person

