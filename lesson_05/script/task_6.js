'use strict'

if (confirm('Почати тестування?')) {
    let counNumber = 0
    document.write('<div style="display:flex;max-width:250px;justify-content:space-between;">')
    for (let i = 0; i < 3; i++) {
        document.write('<table style="border:1px solid black">')
        for (let j = 0; j < 3; j++) {
            document.write('<tr>')
            for (let k = 0; k < 3; k++) {
                counNumber++
                document.write(`<td style="border:1px solid black">${counNumber}</td>`)
            }
            document.write('</tr>')
        }
        document.write('</table>')
    }
    document.write('</div>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}