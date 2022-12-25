// call(), apply(), bind() - used to play with the this keyword

function displayName() {
    console.log('Simran');
}

displayName();// Simran
// Same as above line, each and every function/method in JS has access to this special function - call(firstArg - will be the reference(what we want 'this' to be pointed to))
displayName.call();// Simran
displayName.apply();// Simran

const participant1 = {
    name: 'Lily',
    battery: 70,
    chargeBattery: function() {// function(a, b) a and b are parameters for arguments (participant2, 20 , 30) with value as a is 20 and b is 30.
        this.battery = 100;
    }
}

const participant2 = {
    name: 'John',
    battery: 40
}

participant1.chargeBattery.call(participant2);// I want to take the chargeBattery method of participant1 but I want to use the data from participant2.
// That means you want to call chargeBattery function from participant1 on the object participant2
// Value of 'this' will be participant2 object, so this.battery is same as participant2.battery


console.log(participant1); // { name: 'Kiran, battery: 70, chargeBattery: [Function: chargeBattery] }
console.log(participant2);// { name: 'John', battery: 100 }

// So this how you can reuse methods of other objects for a different particular object. you can pass multiple args to call function after object, that will be applied to function parameter and you can use it.
// ex: participant1.chargeBattery.call(participant2, 20, 30); | chargeBattery(a, b) { this.battery + a + b} // 40 + 20 + 30 = 90(output)


// The apply method is very similar to call, only change is that you should pass args as array of arguments(rather as comma separated which you saw in call()) after object is passed as first arg ex: apply(participant2, [20,30]) | receiving these values will remains same -> chargeBattery(a, b) { this.battery + a + b} // 40 + 20 + 30 = 90(output)

// Bind is actually very similar to call method, participant1.chargeBattery.bind(participant2, 20 , 30);// output: { name: 'John', battery: 40 }
// In call, apply methods our function is immediately invoked , but in case of bind it does not get called in fact it returns another function which you can call later.

let chargeBatteryOfParticipant2 = participant1.chargeBattery.bind(participant2, 20 , 30);
chargeBatteryOfParticipant2();

/**
 * Summary
 * We can conclude that call, apply and bind are used to pass a different value of 'this' to a function, so by using fn.call, fn.apply, fn.bind whatever argument the first argument that you pass will be the value of this keyword inside of any function you want.
 * reuse the method of one obj inside another object. Function borrowing concept.
 * bind is used to invoke function later, call and apply invokes immediately.
 */

/* Exercise */ // https://www.youtube.com/watch?v=75W8UPQ5l7k&ab_channel=AkshaySaini
let name = {
    firstname: 'Sachin',
    lastname: 'Tendulkar'
}

function printFullName(hometown, state) {
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ' , ' + state);
}

// call
printFullName.call(name, 'Mumbai','Maharashtra');// Sachin Tendulkar from Mumbai , Maharashtra
// apply
printFullName.apply(name, ['Mumbai','Maharashtra']);// Sachin Tendulkar from Mumbai , Maharashtra

// bind
let details = printFullName.bind(name, 'Mumbai','Maharashtra');
details();// Sachin Tendulkar from Mumbai , Maharashtra