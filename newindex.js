var  pets = [
    {name: "max", type:"dog",bornOn:2018},
    {name: "angel",type:"cat",bornOn:2015},
    {name: "Jasper", type:"dog",bornOn:2016}
];
console.log(pets);
//get age function ES6
const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;};
let petsWithAge = [];
pets.forEach(
    (pet)=>{
        pet.age = getAge(pet);
        petsWithAge.push(pet);
    }
)
console.log(petsWithAge);
// getAge(pet));
// petsWithAge.push(pet);
// console.log(petsWithAge);
for (let i = 0; i < pets.length; i++) {
    let pett = pets[i];
}
let onlydogsarray = pets.filter((pet) => pet.type ==="dog");
console.log(onlydogsarray);
const jasper = pets.find(pet => pet.name==="Jasper");
// console.log(found);
console.log(`Jasper is ${jasper.age}years old`);






