/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


*/

const teams = [
  { name: 'Wolves', points: 0, fouls: 0 },
  { name: 'Arsenal', points: 0, fouls: 0 },
  { name: 'Brentford', points: 0, fouls: 0 },
  { name: 'Leicester', points: 0, fouls: 0 },
  { name: 'Southampton', points: 0, fouls: 0 },
  { name: 'Liverpool', points: 0, fouls: 0 },
]

// stampo punti iniziali
for (let i = 0; i < teams.length; i++) {
  const team = teams[i];
}

for (let i = 0; i < teams.length; i++) {
  let newPoints = Math.floor((Math.random() * 100) + 1);
  teams[i].points = newPoints
}

for (let i = 0; i < teams.length; i++) {
  let newFouls = Math.floor((Math.random() * 100) + 1);
  teams[i].fouls = newFouls
}
console.log(teams)


