'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 5; j++) {
            for (let k = 0; k < j; k++) {
                document.write(`*`)
            }
            document.write('<br>')
        }
    }
    document.write('<br>')
    document.write('<br>')
    document.write('<br>')

    for (let i = 0; i < 3; i++) {
        let space = 4
        let symbol = 1
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < space; j++) {
                document.write('&nbsp')
            }
            for (let k = 0; k < symbol; k++) {
                document.write('*')
            }
            space--
            symbol++
            document.write('<br>')
        }
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}