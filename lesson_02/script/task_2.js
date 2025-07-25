'use strict'

const answerYear = parseInt(prompt('Введіть ваш рік народження', '0'))
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const fullYears = currentYear - answerYear

document.write(`
    <h1>Ваш вік: ${fullYears} повних років</h1>
`)