'use strict'

if (confirm('Почати тестування?')) {
    let counNumber = 0
    document.write('<table style="border:1px solid black">')
    for (let i = 0; i < 3; i++) {
        document.write('<tr>')
        for (let j = 0; j < 3; j++) {
            counNumber++
            document.write(`<td style="border:1px solid black">${counNumber}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}