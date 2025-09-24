'use strict'

// Користувач задає кількість оцінок і натискає на кнопку «get table». 
// В результаті формується таблиця з input, куди користувач вводить оцінки. 
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.

if (confirm('Почати тестування?')) {
    function getTable() {
        const tableNum = parseInt(document.querySelector('#priceNumber').value)
        const table = document.querySelector('.table')
        
        table.textContent = ''
        
        if (!isNaN(tableNum)) {          
            for (let i = 0; i < tableNum; i++) {
                let input = document.createElement('input')
                input.classList.add('table__input')
                input.type = 'text'
                input.name = 'score'
                input.autocomplete ='off'
                input.placeholder = '0'
                table.append(input)    
            }
        } else {
            table.textContent = 'You didn\'t enter anything, so this is empty.'
        }
    }

    function getSum() {
        const table = document.querySelectorAll('.table__input')
        const score = table.length
        let sum = 0

        for (let i = 0; i < score; i++) {
            let tempNum = parseInt(table[i].value)
            
            if (!isNaN(tempNum))
                sum += tempNum
            else
                sum += 0 
        }

        sum /= score

        document.querySelector('#average-score__sum').textContent = `${sum}`
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