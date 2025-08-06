'use strict'

if (confirm('Почати тестування?')) {
    const monthsYear = 12
    for (let i = 1; i <= monthsYear; i++) {
        if (i < 3) continue
        else if (i < 6) document.write(`Місяц №${i} це \"Весна\"<br>`)
        else if (i < 9) document.write(`Місяц №${i} це \"Літо\"<br>`)
        else break

    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}