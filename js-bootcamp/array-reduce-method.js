const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***REDUCE***
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Note that the output of the reduce method is always a single value. It can be an object, a number, a string, an array, and so on. It depends on what you want the output of reduce method to generate but it's always a single value.

//1. Get total mass of all characters
const totalMass = characters.reduce(function (acc, curr) {
    return acc + curr.mass;
}, 0);
console.log(totalMass);// 346
//2. Get total height of all characters
const totalHeight = characters.reduce(function (acc, curr) {
    return acc + curr.height;
}, 0);
console.log(totalHeight);// 712
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce(function (acc, curr) {
    if(acc[curr.eye_color]) {
        acc[curr.eye_color] = acc[curr.eye_color] + 1;
    } else {
        acc[curr.eye_color] = 1;
    }

    return acc;
}, {})
console.log(charactersByEyeColor);// { blue: 2, yellow: 1, brown: 1 }
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce(function (acc, curr) {
    return acc + curr.name.length;
}, 0);
console.log(totalNameCharacters);// 52