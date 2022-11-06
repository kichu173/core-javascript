// Using fetch API, which has promises in built. Overcome no longer creating our own new Promise((res,rej)) for XMLHttpRequest.
function getPuzzle(wordCount) {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(function(response) {
        if(response.status === 200) {
            return response.json();// return json parsed promise object. no need to provide JSON.parse(response).
        } else {
            throw new Error('Unable to fetch the puzzle data from server');
        }
    }).then(function(data) {
        // we can return string as well in then promise chaining, not only promise object.
        return data.puzzle;
    })
}

function getCountryDetails(countryCode) {
    return fetch(`https://restcountries.com/v2/all`).then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the country data from server');
        }
    }).then(function(data) {
        return data.find(function (country) {
          return country.alpha2Code === countryCode;
        });
    })
}

//Challenge 14. A promise challenge
function getLocation() {
    return fetch(`https://ipinfo.io/json?token=1bdd58c40fa88b`).then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the location data from the server');
        }
    })
}

// Using fetch api from request.js
getPuzzle('1').then(function(puzzle) {
    console.log(puzzle);
}).catch(function(error) {
    console.log(`Error: ${error}`);
})

// getCountryDetails("IN").then(function (country) {
//     console.log(`Country name: ${country.name}`);
// }).catch(function (error) {
//     console.log(`Error: ${error}`);
// });

//Challenge 14. A promise challenge
getLocation().then(function (data) {
    console.log(`You are in ${data.city} ${data.region}, ${data.country}.`);
    // Closely tied, we use information from one(country code) to actually make the other.
    return getCountryDetails(data.country);
}).then(function (country) {
    console.log(`Country name: ${country.name}`);
}).catch(function (error) {
    console.log(`Error: ${error}`);
});