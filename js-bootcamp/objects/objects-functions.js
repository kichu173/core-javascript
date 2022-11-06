// Challenge area
// Create function - take fahrenheit in - return object with all three

function convertFahrenheit(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return {
        fahrenheit : fahrenheit,
        celsius : celsius,
        kelvin : (fahrenheit - 32) * 5/9 + 273.15
    };
}

let resultConversions = convertFahrenheit(74);
console.log(resultConversions);
console.log(resultConversions.kelvin);