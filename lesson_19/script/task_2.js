'use strict'

// Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на 
// якійсь із клітинок, то до відповідної таблиці додається червона рамка 
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці з 
// використанням відповідно доданого для цього атрибута).

if (confirm('Почати тестування?')) {

    function createElement(tag, options = {}) {
        const el = document.createElement(tag)

        if(options.classes)
            el.classList.add(...options.classes)
        if(options.attr)
            el.setAttribute(options.attr.name, options.attr.value)
        if(options.text)
            el.textContent = options.text

        return el
    }

    function createTable(row, cell) {
        const tableWrap = createElement('div', {
            classes: ['table__wrap']
        })
        const tableTitleBlock = createElement('div',{classes: ['table__header']})
        const tableTitle = createElement('h3', {
            classes: ['table__title'],
            text: `Table `
        })
        const tableCount = createElement('p', {
            classes: ['table__count'],
            text: 'Clicks: 0'
        })
        const tableBlock = createElement('table', {
            classes: ['table__block'],
            attr: {
                name: 'count', 
                value: '0'
            }
        })


        for (let indexRow = 0; indexRow < row; indexRow++) {
            let tableRow = createElement('tr', {classes: ['table__row']})

            for (let indexCell = 0; indexCell < cell; indexCell++) {
                let tableData = createElement('td', {
                    classes: ['table__data'],
                    text: `${Math.random().toFixed(2)}`
                })  
                tableRow.append(tableData)
            }
            tableBlock.append(tableRow)   
        }

        tableTitleBlock.append(tableTitle, tableCount)
        tableWrap.append(tableTitleBlock, tableBlock)

        return tableWrap
    }

    function printTab (count = 0, row, cell) {
        for (let i = 0; i < (count || 1); i++) {
            const table = createTable(row,cell)
            table.querySelector('.table__title').textContent = `Table #${i + 1}`
            document.querySelector('.table').append(table)              
        }
    }

    function countingPress(e) {
        const table = e.target.closest('.table__wrap')
        
        if (!table) return
        
        const tableCount = table.querySelector('.table__count')
        let contClick = parseInt(table.getAttribute('count')) || 0

        contClick++
        table.setAttribute('count', contClick)
        table.querySelector('.table__block').classList.add('active')
        tableCount.textContent = `Clicks: ${contClick}`
    }
    
    window.addEventListener('load', () => {
        printTab(3, 3, 3)
        document.querySelector('.table').addEventListener('click', countingPress)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}