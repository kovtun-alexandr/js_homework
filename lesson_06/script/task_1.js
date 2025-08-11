'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            document.write('O')
        }
        document.write('<br>')
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}