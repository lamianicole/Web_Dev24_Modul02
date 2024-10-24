class SchoolClass {
    _name: string;
    _id: number;
    _endDate?: number;
    _pupils?: Person[];

constructor(name: string, id: number, endDate?: number, pupils?: Person[]) {
    this._name = name;
    this._id = id;
    this._endDate = endDate;
    this._pupils = pupils || [];
    console.log('School class creation successful');
}
}

export default SchoolClass


// this._pupils = pupils || [];
// initialisiert pupils als leeres array, d.h., falls pupils nicht definiert ist, wird ein leeres array verwendet (Tipp von Copilot)