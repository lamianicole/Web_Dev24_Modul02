// Objekte-TS-Level-1_4
type Pet = {
    tiertyp: string;
    namen: string[];
};  

let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
];

console.log(unsereHaustiere[0].namen[1]);
// Nala

console.log(unsereHaustiere[1].namen[2]);
// Droopy

console.log(unsereHaustiere[1].namen);
// alle Hundenamen ausgeben lassen: Knöpfchen, Pinselchen, Droopy

// Möglichkeit2 - Droopy in Snoopy ändern mit replace
unsereHaustiere[1].namen[2] = unsereHaustiere[1].namen[2].replace("Droopy", "Snoopy");
console.log(unsereHaustiere[1].namen[2]);
// Snoopy

// Möglichkeit 1 - Dinky in Pinky ändern
unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere);
console.log(unsereHaustiere[0].namen[2]);
// Pinky

// ein weiteres Objekt vom Typ Pet, hier Hamster, erstellen
let unsereHamster: Pet = {
    tiertyp: 'Hamster',
    namen: ['Tupu', 'Hupu', 'Lupu']
};

// dem Array hinzufügen
unsereHaustiere.push(unsereHamster);
console.log(unsereHaustiere);














