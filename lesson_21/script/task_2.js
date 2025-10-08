'use strict'

// Створити клас Client
// Властивості    ID
//                ПІБ
//                Кількість грошей на рахунку
// Методи         Додавання грошей
//                Зняття грошей
//                ToString
// На основі цього класу створити клас GoldenClient
// Властивості    ID
//                ПІБ
//                Кількість грошей на рахунку
//                Ліміт кредитних коштів
//                Відсоток за використання кредитних коштів
// Методи         Додавання грошей
//                Зняття грошей
//                Визначення пені за використання кредитних коштів
//                ToString

if (confirm('Почати тестування?')) {
    class IsNotNumberError extends Error {
        constructor() {
            super()
            this.message = 'There must be a number.'
            this.name = 'IsNotNumberError'
        }
    }

    class IsNegativeNumberError extends Error {
        constructor() {
            super()
            this.message = 'Cannot be negative.'
            this.name = 'IsNegativeNumberError'
        }
    }

    class IsNotEnoughMoneyError extends Error {
        constructor(){
            super()
            this.message = 'Not enough money in the account'
            this.name = 'NotEnoughMoneyError'
        }
    }

    class Client {
        static counter = 1

        constructor(initName, initBalance = 0) {
            this.id = Client.counter++
            this.name = initName
            this.balance = initBalance
        }

        deposit(amount) {
            validateAmount(amount)
            this.balance += amount
        }

        withdrow(amount) {
            validateAmount(amount)
            try {
                if (amount > this.balance) throw new IsNotEnoughMoneyError()
            } catch (error) {
                console.log(error.message)
            }
            this.balance -= amount
        }

        toString() {
            return `Name: ${this.name} - Balans: ${this.balance} $`
        }
    }

    class GoldClient extends Client {
        constructor(initName, initBalance) {
            super(initName, initBalance)
            this.creditLimit = 100000
            this.creditUsed = 0
            this.creditRate = 5
        }

        deposit(amount) {
            validateAmount(amount)

            if (this.creditUsed > 0) {
                if (amount >= this.creditUsed) {
                    amount -= this.creditUsed
                    this.creditUsed = 0
                } else {
                    this.creditUsed -= amount
                    amount = 0
                }
            }

            if (amount > 0 ) super.deposit(amount)
        }

        withdrow(amount) {
            validateAmount(amount)

            if (amount <= this.balance) {
                super.withdrow(amount)
            } else {
                const debit = amount - this.balance

                try {
                    if (debit > this.creditLimit - this.creditUsed) throw new IsNotEnoughMoneyError()
                } catch (error) {
                    console.log(error.message + ' Credit limit exceeded!')
                    return false
                }

                this.creditUsed += debit
                this.balance = 0
            }
            
        }

        penny() {
            return this.creditUsed * (this.creditRate / 100)
        }

        toString() {
            return `${super.toString()} - Credit used: ${this.creditUsed} $ - Credit rate: ${this.creditRate}%`
        }
    }

    function validateAmount(amount) {
        try {
            if (isNaN(amount)) throw new IsNotNumberError()
            if (amount <= 0) throw new IsNegativeNumberError()
        } catch (error) {
            if (error instanceof IsNotNumberError) {
                console.log(error.message + ' Write only numbers')
            } else if (error instanceof IsNegativeNumberError) {
                console.log(error.message + ' The amount must be greater than 0.')
            } else console.log(error.message)
            return false
        }

        return true
    }

    window.addEventListener('load', () => {
        // --- Regular customer ---
        const client1 = new Client('Ivanov Ivan Ivanochych', 1000)
        console.log(client1.toString())

        client1.deposit(500)
        console.log('After depositing 500:', client1.toString())

        client1.withdrow(1200)
        console.log('After trying to withdraw 1200:', client1.toString())

        client1.withdrow(500)
        console.log('After trying to withdraw 500:', client1.toString())

        // --- Gold client ---
        const goldClient = new GoldClient('Petrova Maria Igorevna', 2000)
        console.log(goldClient.toString())

        goldClient.withdrow(2500)
        console.log('After withdrawing 2500:', goldClient.toString())
        console.log('Loan penalty:', goldClient.penny(), "$")

        goldClient.deposit(1000)
        console.log('After depositing 1000:', goldClient.toString())

        goldClient.withdrow(150000)
        console.log('After trying to withdraw 150,000:', goldClient.toString())
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}