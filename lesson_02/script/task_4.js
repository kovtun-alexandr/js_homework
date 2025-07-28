'use strict'

const numberСentimeters = parseInt(prompt('Вкажіть довжину у см.', '350'))
const meters = numberСentimeters / 100
const kilometers = numberСentimeters / 100000

document.write(`
    <ul>
        <li>Ваша відповідь: ${numberСentimeters}см.</li>
        <li>В метрах це складає: ${meters}м.</li>
        <li>В кілометрах це складає: ${kilometers}км.</li>
    </ul>    
`)