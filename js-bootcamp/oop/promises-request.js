function getPuzzle(wordCount) {
  return new Promise(function (resolve, reject) {
    // XMLHttpRequest - constructor function (making an HTTP request)
    const puzzleReq = new XMLHttpRequest();

    puzzleReq.addEventListener("readystatechange", function (e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data);
        console.log("random puzzle string - > ", data.puzzle);
      } else if (e.target.readyState === 4) {
        reject("Unable to fetch the puzzle data from server");
      }
    });

    puzzleReq.open(
      "GET",
      `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
    );
    puzzleReq.send();
  });
}

function getCountryDetails(countryCode) {
  return new Promise(function (resolve, reject) {
    // XMLHttpRequest - constructor function (making an HTTP request)
    const req = new XMLHttpRequest();

    req.addEventListener("readystatechange", function (e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(function (country) {
          return country.alpha2Code === countryCode;
        });
        resolve(country);
      } else if (e.target.readyState === 4) {
        //even if you dont pass undefined as second argument to callback fn, it will consider as undefined.
        reject("Unable to fetch the country data from server");
      }
    });

    req.open("GET", "https://restcountries.com/v2/all");
    req.send();
  });
}

//Promises
getPuzzle('1').then(function(data) {
  console.log(data.puzzle);
}, function(err) {
  console.log(`Error: ${err}`);
}) 

getCountryDetails('IN').then(function(res) {
  console.log(`Country name: ${res.name}`);
}, function(err) {
  console.log(`Error: ${err}`);
})
