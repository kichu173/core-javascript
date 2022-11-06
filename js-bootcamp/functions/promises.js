// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined)
        callback('This is my callback error', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err) // This is my callback error
    } else {
        console.log(data)
    }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('This is my promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err) // This is my promise error
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err) // This is my promise error
})

// if you need to pass an argument to promise(ex: data which is 123).
const getDataPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is my success data: ${data}`);
      // reject('This is my promise error')
      // reject('This is my promise error')
    }, 2000);
  });
};

const myPromise1 = getDataPromise(123)

myPromise1.then((data) => {
    console.log(data) // This is my success data: 123
}, (err) => {
    console.log(err)
})


console.log('-------------------------------')

// Callback hell
const getDataCallback1 = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallback1(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback1(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data) // 8
            }
        })
    }
})

//Better way of structuring promises using promise chaning concept and avoid callback hell using promises.
// Promise
const getDataPromise1 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise1(2).then((data) => {
    getDataPromise1(data).then((data) => {
        console.log(`Promise data: ${data}`) // 8
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

//overcoming duplicate code of err from above promise nesting using promise chaining
getDataPromise1(10).then((data) => {
    return getDataPromise1(data)
}).then((data) => {
    return getDataPromise1(data) // use return for passing data to other chain .then(data)
}).then((data) => {
    console.log(data) //80
}).catch((err) => {
    console.log(err) // 'Number must be provided'
})