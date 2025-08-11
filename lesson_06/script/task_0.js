'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const char = String.fromCharCode(65 + j + i);
            document.write(`${char}`)
        }
        document.write('<br>')
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}