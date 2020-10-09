function personAccount(firstName, lastName, incomes, expenses) {
    function totalIncome() {
        return incomes.reduce((acum, current) => {
            return acum + current.value
        }, 0);
    }

    function totalExpense() {
        return expenses.reduce((acum, current) => {
            return acum + current.value
        }, 0);
    }

    function accountInfo() {
        return {
            firstName,
            lastName,
            incomes,
            expenses,
            totalIncomes: totalIncome(),
            totalExpenses: totalExpense()
        }
    }

    function addIncome(subject, value) {
        incomes = [ ...incomes, { subject, value} ];
        return "OK"
    }
    
    function addExpense(subject, value) {
        expenses = [ ...expenses, { subject, value} ];
        return "OK"
    }

    function accountBalance() {
        return totalIncome() - totalExpense()
    }

    return {
        firstName,
        lastName,
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    }
}

const describeAccount = personAccount => {
    const { firstName, lastName } = personAccount;
    console.log(`Describing account details for user: ${firstName} ${lastName}`)
    console.log(`Total Income: ${personAccount.totalIncome()}`)
    console.log(`Total Expense: ${personAccount.totalExpense()}`)
    console.log(`Account Balance: ${personAccount.accountBalance()}`)
    console.log('\n')
}

/* Basic execution of function, some assertions were done to test the console.assert method */
const testAccountMethods = () => {
    const johnAccount = personAccount('John', 'Doe', incomes, expenses);
    describeAccount(johnAccount)

    console.assert(johnAccount.totalIncome() === 205, 'Initial total income must be 205')
    console.assert(johnAccount.totalExpense() === 45, 'Initial total expense must be 45')

    const { firstName, lastName } = johnAccount;
    console.assert(firstName === 'John' && lastName === 'Doe', 'The user\'s full name must be "John Doe"')

    johnAccount.addIncome('testIncome', 301)
    johnAccount.addExpense('testExpense', 311)

    console.assert(johnAccount.accountBalance() === 150, `Final balance for ${firstName} ${lastName} must be 150`)
    describeAccount(johnAccount)
}

testAccountMethods()
