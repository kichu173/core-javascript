function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

let result = convertFahrenheitToCelsius(32);
console.log(result);

let otherResult = convertFahrenheitToCelsius(68);
console.log(otherResult);

// challenge area -- scope tree
// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)