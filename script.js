"use strict";
/* Zadatak 1*/

const marko = {
  ime: "Marko",
  tezina: 78,
  visina: 1.69,
  calcITM() {
    let itm = this.tezina / this.visina ** 2;
    return itm;
  },
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  calcITM() {
    let itm = this.tezina / this.visina ** 2;
    return itm;
  },
};

if (marko.calcITM() > josip.calcITM()) {
  console.log(
    `Markov ITM (${marko.calcITM().toFixed(1)}) je veci od Josipovog (${josip
      .calcITM()
      .toFixed(1)})`
  );
} else if (josip.calcITM() > marko.calcITM()) {
  console.log(
    `Josipov ITM (${josip.calcITM().toFixed(1)}) je veci od Markovog (${marko
      .calcITM()
      .toFixed(1)})`
  );
} else {
  console.log(`Marko i Josip imaju jednaki ITM.`);
}

/* Zadatak 2*/

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};

const josJedanAlbum = {
  umjetnik: "Pearl Jam",
  naslov: "Ten",
  godina: 1991,
  format: ["CD", "8T", "LP"],
};

album.push(noviAlbum);
album.push(josJedanAlbum);
console.log(album);

/*Zadatak 3 */

const listaRacuna = [125, 555, 44];
const listaNapojnica = [44, 105, 14];

let total = [];

for (let i = 0; i < listaRacuna.length; i++) {
  let izracun = listaRacuna[i] + listaNapojnica[i];
  total.push(izracun);
}

console.log(total);
