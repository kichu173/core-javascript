let acc = {
    name: 'kichu',
    expenses: 0,
    income: 0
}

function test(testAcc) {
    testAcc = {};
    console.log(testAcc); // {}
}

test(acc);
console.log(acc); // { name: 'kichu', expenses: 0, income: 0 }

function test1(testAcc) {
    testAcc = {};
    console.log(testAcc); // {}
    testAcc.age = 27;
    console.log(testAcc);// { age: 27 }
}

test1(acc);
console.log(acc);// { name: 'kichu', expenses: 0, income: 0 }

function test2(testAcc) {
    testAcc = 1;
    testAcc.age = 27;
    console.log(testAcc);// 1
}

test2(acc);
console.log(acc); // { name: 'kichu', expenses: 0, income: 0 }

console.log('----------------');

let otherAcc = acc;
console.log(acc); // { name: 'kichu', expenses: 0, income: 0
otherAcc.expenses = 11;
console.log(acc);// { name: 'kichu', expenses: 11, income: 0 }
otherAcc= {};
console.log(acc);// { name: 'kichu', expenses: 11, income: 0 }
otherAcc= 1;
console.log(acc);// { name: 'kichu', expenses: 11, income: 0 }