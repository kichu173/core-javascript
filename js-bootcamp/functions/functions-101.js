// challenge

function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

let result = convertFahrenheitToCelsius(32);
console.log(result);

let otherResult = convertFahrenheitToCelsius(68);
console.log(otherResult);