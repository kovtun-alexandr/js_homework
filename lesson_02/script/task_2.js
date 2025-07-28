'use strict'

const numberYear = parseInt(prompt('Введіть ваш рік народження', '2003'))
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const fullYears = currentYear - numberYear

document.write(`
    <h1>Ваш вік: ${fullYears} повних років</h1>
`)