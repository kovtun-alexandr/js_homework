'use strict'

if (confirm('Почати тестування?')) {
    const deposit = parseFloat(prompt('Введіть кількість грошей у грн. яку хочете вкласти: ', ''))
    const rateYears = 0.20
    let sumDeposit = deposit

    for (let i = 0; i < 20; i++) {
        sumDeposit += sumDeposit * rateYears
    }

    document.write(`Через 20 років ви отримаєте ${sumDeposit.toFixed(2)} грн.`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}