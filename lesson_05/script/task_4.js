'use strict'

if (confirm('Почати тестування?')) {
    document.write('<table style="border:1px solid black">')
    for (let i = 0; i < 3; i++) {
        document.write('<tr>')
        for (let j = 1; j <= 7; j++) {
            document.write(`<td style="border:1px solid black">${j}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}