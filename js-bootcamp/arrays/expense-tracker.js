// challenge area

const account = {
    name: 'Andrew Mead',
    expenses: [],
    addExpense: function (desc, amt) {
        this.expenses.push({
            description: desc,
            amount: amt
        });
    },
    getAccountSummary: function () {
        let totalExpense = 0;
        let totalIncome = 0;
        this.expenses.forEach(function (expense) {
            totalExpense += expense.amount;
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount;
        })
        return `${this.name} has a balance of $${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses.`
    },
    income: [],
    addIncome: function (desc, amt) {
        this.income.push({
            description: desc,
            amount: amt
        });
    }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());