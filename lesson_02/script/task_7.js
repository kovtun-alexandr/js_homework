'use strict'

const randomMonth = Math.floor(Math.random() * 12) + 1
const randomDay = Math.floor(Math.random() * 6)
const sumMonthAndDay = randomMonth + randomDay

document.write(`
    <div>Випадковий місяц: ${randomMonth}</div>
    <div>Випадковий день тижня: ${randomDay}</div>    
    <div>Їх сумма: ${sumMonthAndDay}</div>    
`)