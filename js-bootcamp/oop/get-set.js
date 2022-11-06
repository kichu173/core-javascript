const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object
//setters
data.location = '  Philadelphia    '
data.location = ' New York'

//getters // getter doesnt need a () brackets at call time.
console.log(data.location); // New York

console.log(data)
//  {
//     locations: [ 'Philadelphia', 'New York' ],
//     location: [Getter/Setter],
//     _location: 'New York'
//   }