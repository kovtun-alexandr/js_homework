'use strict'

if (confirm('Почати тестування?')) {
    function getCreatTable(row, column, message) {
        let table = '<table style="border: 1px solid #000;">'

        for (let i = 0; i < row; i++) {
            table += '<tr>'
            for (let j = 0; j < column; j++) {
                table += `<td style="border: 1px solid #000;">${message}</td>`
            }
            table += '</tr>'
        }
        table += '</table>'

        return table
    }

    const tableRow = parseInt(prompt('Вквжіть кількість рядків таблиці', '3'))
    const tableColumn = parseInt(prompt('Вкажіть кількість столбців таблиці', '5'))
    const tableMwssage = prompt('Вкажіть повідомлення яким буде заповнена таблиця', 'Hello')

    document.write(`${getCreatTable(tableRow, tableColumn, tableMwssage)}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}