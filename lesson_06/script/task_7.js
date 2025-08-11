'use strict'

if (confirm('Почати тестування?')) {
    const deposit = parseFloat(prompt('Введіть кількість грошей у грн. яку хочете вкласти: ', ''))
    const rateYearsFirst = 0.20
    const rateYearsSecond = 0.27
    let sumDeposit = deposit

    for (let i = 0; i < 20; i++) {
        sumDeposit += sumDeposit * rateYearsFirst
        console.log(sumDeposit)
    }
    for (let i = 0; i < 17; i++) {
        sumDeposit += sumDeposit * rateYearsSecond
        console.log(sumDeposit)
    }

    document.write(`Через 37 років ви отримаєте ${sumDeposit.toFixed(2)} грн.`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}