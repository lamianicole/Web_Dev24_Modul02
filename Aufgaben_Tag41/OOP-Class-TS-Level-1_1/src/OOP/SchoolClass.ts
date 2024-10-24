class SchoolClass {
    _name: string;
    _id: number;
    _endDate?: number;

constructor(name: string, id: number, endDate?: number) {
    this._name = name;
    this._id = id;
    this._endDate = endDate;
}
}

export default SchoolClass