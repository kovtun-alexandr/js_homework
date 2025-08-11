'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 12; i > 0; i--) {
        for (let j = 0; j < i; j++) {

            document.write('o')
        }
        document.write('<br>')
    }
    document.write('<br>')
    document.write('<br>')
    document.write('<br>')
    document.write('<br>')
    document.write('<br>')

    // Самостійно не прийшов до ццього рішення, взяв у інтернеті  
    let space = 0
    let symbol = 12
    for (let i = 12; i > 0; i--) {
        for (let j = 0; j < space; j++) {
            document.write('&nbsp')
        }
        for (let k = 0; k < symbol; k++) {
            document.write('o')
        }
        space++
        symbol--
        document.write('<br>')
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}