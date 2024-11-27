/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
  {
    nome: 'Bergamont',
    peso: 8.4
  },
  {
    nome: 'Bianchi',
    peso: 10
  },
  {
    nome: 'Bmc',
    peso: 13,
  },
  {
    nome: 'Cannondale',
    peso: 7
  },
  {
    nome: 'Cinelli',
    peso: 9
  },
  {
    nome: 'Argon',
    peso: 7.5
  },
];

// mostro il peso di tutte le bici
for (let i = 0; i < bicycles.length; i++) {
  const bicycle = bicycles[i];
  console.log(bicycle.peso)
}

let lightBicycle = bicycles[0];

for (let i = 0; i < bicycles.length; i++) {
  const bicycle = bicycles[i];
  if (bicycle.peso < lightBicycle.peso) {
    lightBicycle = bicycle;
  }
  console.log(`La bicicletta più leggera è ${lightBicycle.peso}`);
}


const lightestBicycles = document.getElementById('lightest-bicycle')
console.log(lightBicycle);
lightestBicycles.innerHTML = `La bicicletta più leggera è ${lightBicycle.nome}, con un peso di ${lightBicycle.peso} kg.`
