'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 0; i < 8; i++) {
        document.write(`<button style='margin-bottom: 5px'>\"Hello\"</button><br>`)
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}