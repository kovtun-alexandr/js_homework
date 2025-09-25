'use strict'

// Користувач задає кількість оцінок і натискає на кнопку «get table». 
// В результаті формується таблиця з input, куди користувач вводить оцінки. 
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.

if (confirm('Почати тестування?')) {
    function getTable() {
        const tableNum = parseInt(document.querySelector('#priceNumber').value)
        const block = document.querySelector('.table')
        const table = document.createElement('table')
        
        table.textContent = ''
        
        if (!isNaN(tableNum)) { 
            for (let i = 0; i < tableNum; i++) {
                let tableRow = document.createElement('tr')         
                let tableData = document.createElement('td')
                let input = document.createElement('input')
                input.classList.add('table__input')
                input.type = 'text'
                input.name = 'score'
                input.autocomplete ='off'
                input.placeholder = '0'
                tableData.append(input)
                tableRow.append(tableData)
                table.append(tableRow)    
            }
        } else {
            table.textContent = 'You didn\'t enter anything, so this is empty.'
        }
        block.append(table)
    }

    function getSum() {
        const inputs = document.querySelectorAll('.table__input')
        let count = 0
        let sum = 0

        for (const element of inputs) {
            let tempNum = parseInt(element.value)
            
            if (!isNaN(tempNum)){
                sum += tempNum  
                count++
            }
        }

        const average = count > 0 ? sum / count : 0

        document.querySelector('#average-score__sum').textContent = `${average}`
    }

    window.onload = function() {
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault()
        });
        document.getElementById('table').onclick = getTable
        document.getElementById('sum').onclick = getSum
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}