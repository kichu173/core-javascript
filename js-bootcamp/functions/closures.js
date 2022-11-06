// closures are related to functions and function scope.

//Example 3(challenge)
function createTipper(baseTip) {
    function createBill(billAmount) {
        return billAmount * baseTip;
    }
    return createBill;
}

const tip = createTipper(.2);
console.log(tip(100));

//Example 1
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 100; // will not work. cannot modify counter variable directly because of closures.
console.log(counter.get())

// Adder - Example 2
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))
