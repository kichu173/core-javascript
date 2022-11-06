// In obj references we can modify objects properties by passing it to function as arguments and reference points to actual object. But you cannot modify by assigning a {} or 1(number) to it in function.

// challenge area 
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

// myAccount = {};          // 06:23 - 4. Objects References
// console.log(myAccount);
// myAccount = 1;
// console.log(myAccount);

function addExpense(account, amount) {
    account.expenses += amount;
}

function addIncome(account, incomeAmt) {
    // account = {};
    // console.log(account); // {}
    account.income += incomeAmt;
    // console.log(account);// { income: NaN }
}

function resetAccount(account) {
    account.expenses = 0;
    account.income = 0;
}

function getAccountSummary(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`;
}

addIncome(myAccount, 1000);
// console.log(myAccount); // { name: 'Andrew Mead', expenses: 0, income: 0 }
addExpense(myAccount, 50);
addExpense(myAccount, 50);
let getAccountSummary1 = getAccountSummary(myAccount);
console.log(getAccountSummary1);
resetAccount(myAccount);
let getAccountSummary2 = getAccountSummary(myAccount);
console.log(getAccountSummary2);

// -------------------------
console.log('--------------------')
let acc = {
    expenses: 0,
    income: 0
}

let otherAcc = acc;
console.log(acc); // { expenses: 0, income: 0 }
otherAcc.expenses = 1;
console.log(acc); // { expenses: 1, income: 0 }
otherAcc = {};
console.log(acc);// { expenses: 1, income: 0 }