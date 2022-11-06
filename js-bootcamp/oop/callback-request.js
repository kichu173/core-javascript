function getPuzzle(wordCount, callback) {
    // XMLHttpRequest - constructor function (making an HTTP request)
    const puzzleReq = new XMLHttpRequest();

    puzzleReq.addEventListener('readystatechange', function (e) {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            // we have access to parent scope(closures), so we are able to use callback inside here.
            callback(undefined, data);
            console.log('random puzzle string - > ', data.puzzle);
        } else if(e.target.readyState === 4) {
            callback('Unable to fetch the puzzle data from server', undefined);
        }
    })

    puzzleReq.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    puzzleReq.send();
}

function getCountryDetails(countryCode, callback) {
    // XMLHttpRequest - constructor function (making an HTTP request)
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', function(e) {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find(function(country) {
                return country.alpha2Code === countryCode;
            })
            callback(undefined, country);
        } else if(e.target.readyState === 4) {
            //even if you dont pass undefined as second argument to callback fn, it will consider as undefined.
            callback('Unable to fetch the country data from server');
        }
    })

    req.open('GET', 'https://restcountries.com/v2/all');
    req.send();
}

// XMLHttpRequest - constructor function (making an HTTP request)
//using callbacks for async execution, calling getPuzzle(parameter, with callback fn) method.
getPuzzle('1', function(error, response) {
    if(error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(response);
    }
}); 

getCountryDetails('MX', function(error, response) {
    if(error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Country name: ${response.name}`);
    }
});