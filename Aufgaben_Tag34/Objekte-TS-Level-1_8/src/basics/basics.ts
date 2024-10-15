type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type Student = {
    name: string;
    age: number;
    coop: boolean;
    address: Address;// type Address wurde oben angegeben (quasi Typ im Typ)
    emails: string[];
};

let studentData: Student[] = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

// function selectedData deklarieren
// (students: Student[]): Funktion akzeptiert Parameter students, der ein Array von Student-Objekten ist.
const selectedData = (students: Student[]): void => {
    students.forEach((student: Student) => {
        console.log(student.name);
        console.log(student.coop);
        console.log(student.address.city);
        console.log(student.emails);
    })
}

// Ruft die Funktion selectedData auf und übergibt das studentData-Array als Argument. Die Funktion wird dann ausgeführt und gibt die gewünschten Daten auf der Konsole aus.
selectedData(studentData);

// Die forEach-Methode iteriert über jedes Objekt im Array und führt die Callback-Funktion aus.