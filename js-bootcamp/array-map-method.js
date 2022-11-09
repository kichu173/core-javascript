// https://www.youtube.com/watch?v=G6J2kl1aVao&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT&index=2&ab_channel=JamesQQuick
// https://github.com/jamesqquick/javascript-array-functions-practice/blob/master/worksheet.js

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

//***MAP***
// What map will do is it will iterate through each item in array and it will allow us to 
// transform each item in some way so the result will be another array with transformed item from each one of the original items in the array.

//1. Get array of all names
const names = characters.map(function(character) {
    return character.name;
}) 
console.log(names);
//2. Get array of all heights
const heights = characters.map(function(character) {
    return character.height;
}) 
console.log(heights);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map(function(character) {
    return {
        name: character.name,
        height: character.height
    }
})
console.log(minifiedRecords); // [{ name: 'Luke Skywalker', height: 172 },{ name: 'Darth Vader', height: 202 },{ name: 'Leia Organa', height: 150 },{ name: 'Anakin Skywalker', height: 188 }]
//4. Get array of all first names
const firstNames = characters.map(function(character) {
    return character.name.split(" ")[0];
})
console.log(firstNames);

// 'Luke Skywalker'.split(" ")
// ['Luke', 'Skywalker']
