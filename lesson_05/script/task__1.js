'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 3; i <= 8; i++) {
        if (i < 6) document.write(`Місяц №${i} це \"Весна\"<br>`)
        else document.write(`Місяц №${i} це \"Літо\"<br>`)
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}