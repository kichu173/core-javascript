//spread operator with objects gives us an easy way to create, clone, and merge objects.

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    //add new property like basement
    basement: true,
    ...house
    // order matters, after the ...spread syntax if you like to override any of property ex: yearBuilt from 2017 to 2021 you can do only after that spread opertor for overriding.
}

// newHouse.bedrooms = 3 // this line modifies the cloned object with spread operator and leaves the original array as same.

console.log(house);
console.log(newHouse);


//Merge below objects into overview object
const person = {
    name: 'Kichu',
    age: 27
}

const location = {
    city: 'chennai',
    country: 'IN'
}

const overview = {
    ...person,
    ...location
}

console.log(overview);// { name: 'Kichu', age: 27, city: 'chennai', country: 'IN' }