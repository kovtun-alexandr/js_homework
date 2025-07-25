'use strict'

const answerСentimeters = parseInt(prompt('Вкажіть довжину у см.', '0'))
const meters = answerСentimeters / 100
const kilometers = answerСentimeters / 1000

document.write(`
    <ul>
        <li>Ваша відповідь: ${answerСentimeters}см.</li>
        <li>В метрах це складає: ${meters}м.</li>
        <li>В кілометрах це складає: ${kilometers}км.</li>
    </ul>    
`)