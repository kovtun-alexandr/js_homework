'use strict'

if (confirm('Почати тестування?')) {
    document.write('<table style="border:1px solid black"><tr>')
    for (let i = 1; i <= 7; i++) {
        document.write(`<td style="border:1px solid black">${i}</td>`)
    }
    document.write('</tr></table>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}