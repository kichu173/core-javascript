// async is used for function which returns promise object, await is a operator used to either resolve or reject promise object and also it can be only used with async functions.
// The await operator makes the function pause the execution and wait for a resolved promise before it continues. example: const data = await Promise Object;
async function getPuzzle(wordCount) {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error(`Unable to get the puzzle data from server`);
    }
}

async function getCountryDetails(countryCode) {
    const response = await fetch(`https://restcountries.com/v2/all`);
    if (response.status === 200) {
        const data = await response.json();
        return data.find(function (country) {
            return country.alpha2Code === countryCode;
        });
    } else {
        throw new Error('Unable to fetch the country data from server');
    }
}

//Challenge 14. A promise challenge
async function getLocation() {
    const response = await fetch(`https://ipinfo.io/json?token=1bdd58c40fa88b`);
    if (response.status === 200) {
        // we can also write as return response.json(); without await(like below line), or below code with await both way works.
        return await response.json();
    } else {
        throw new Error('Unable to fetch the location data from the server');
    }
}

//challenge 16. async await
async function getCurrentCountry() {
    const location = await getLocation();
    // we can also write as return getCountryDetails(location.country); without await, or below both way works.
    const country = await getCountryDetails(location.country);
    return country;
}