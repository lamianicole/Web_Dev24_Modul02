type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
};

let meineTopVier: Musik[] = [
    {
    kunstler: 'The Beatles',
    title: 'Abbey Road',
    release_jahr: 1969,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    },
    {
    kunstler: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_jahr: 1978,
    formate: ['CS', 'CD', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_jahr: 1971,
    formate: ['CS', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_jahr: 1983,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    }
];

// auf Objekte zugreifen:
// The Beatles
console.log(meineTopVier[0].kunstler);

// aus dem Objekt Pink Floyd: "Download"
console.log(meineTopVier[1].formate[3]);

// aus dem Objekt Pink Floyd: true
console.log(meineTopVier[1].gold);

// die Releasejahre: 1971 und 1983 (einmal beide numbers ausgeben)
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);
// die Releasejahre: 1971 und 1983 (alles als string mit einem „und“)
console.log(meineTopVier[2].release_jahr+" und "+meineTopVier[3].release_jahr);

// von Metallica: "MC"
console.log(meineTopVier[3].formate[2]);

// aus dem Objekt Metallica das Wort: "Ride"
console.log(meineTopVier[3].title.substring(17,21));

// ein neues Objekt vom Typ Musik anlegen... und füge es zum Array hinzu.
const neuesAlbum: Musik = {
    kunstler: 'Ruger Hauer/Paperi T',
    title: 'Täällä (Live)',
    release_jahr: 2011,
    formate: ['Download'],
    gold: false
};

meineTopVier.push(neuesAlbum);
console.log(meineTopVier);



// Aufgabe Level 1_7
// Gib folgende Werte mit forEach() pro Objekt folgende Werte im HTML aus:
    // - kunstler
    // - title
    // - formate
const musicData = document.querySelector('#musicData') as HTMLElement;

meineTopVier.forEach((elt) => {
    musicData.innerHTML += `<div>
    <p>${elt.kunstler}</p>
    <p>${elt.title}</p>
    <p>${elt.formate}</p>
    <br>
</div>
`;
})

// Erinnerung: hier innerHTML, nicht textContent, denn damit wäre Ergebnis nicht richtig formatiert. Alles würde als Text dargestellt werden, und die HTML-Struktur (<div>, <p>, <br>) würde nicht berücksichtigt. Mit innerHTML dagegen schon  

