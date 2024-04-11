const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Animal Sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Traditional Animal Names
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter(animal => animal !== 'horse');

// 3. Traditional Animal Colors
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter(animal => animal !== 'horse');

// 4. Rainbow Color Variables
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Rainbow Color Initials
const [r, o, y, g, b, , v] = colors;

// 6. Indigo Variable
const [, , , , , indg] = colors;

// 7. Object Destructuring
const { muppetName, color, song, job, partner } = muppet;

// 8. Nested Object Destructuring
const { song2, song4, job: nestedJob, partner: nestedPartner } = nestedMuppet.album.theMuppetMovie;

// Testing
console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, indg, v);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);