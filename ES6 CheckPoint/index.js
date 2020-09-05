var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

// Cant find a better way for the object declaration . help ??

// function getAge(pet) {
//   return new Date().getFullYear() - pet.bornOn;
// }

// Es6 version 
const getAge = (pet) => new Date().getFullYear() - pet.bornOn; 

// var petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
// console.log(petsWithAge);

// ES6 Version 

let petsWithAge = [];
for (let pet of pets) {pet.age = getAge(pet);petsWithAge.push(pet)};
  console.log(petsWithAge);

// var dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
// console.log(dogs);

// ES6 Version 

let dogs = [];
for (let pet of pets) {pet.type==="dog"? dogs.push(pet):0};
  console.log(dogs);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }
// console.log("Jasper is " + jasper.age + " years old");


// ES6 Version

let jasper;
for (let pet of pets) {pet.name === "Jasper"? jasper = pet:0};
console.log(`Jasper is ${jasper.age} years old`)