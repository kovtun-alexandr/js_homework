'use strict'

// Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1) Номери рядків від 0 до половини, стовпці від 0 до половини
// 2) Номери рядків від 0 до половини, стовпці від половини до кінця
// 3) Номери рядків (від половини до кінця, стовпці від 0 до половини
// 4) Номери рядків від половини до кінця , стовпці від половини до кінця
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.

if (confirm('Почати тестування?')) {
    const numberArrays = parseInt(prompt('Вкажіть кількість масивів:', '4'))
    const numberRows = parseInt(prompt('Вкажіть кількість рядків:', '4'))
    const numberElements = parseInt(prompt('Вкажіть кількість елементів:', '10'))

    const getGeneratedArray = (rows, elements, min, max) => Array.from(
        { length: rows },
        () => getRandomElements(elements, min, max)
    )

    const getRandomElements = (elements, min, max) => Array.from(
        { length: elements },
        () => min + Math.floor(Math.random() * (max - min + 1))
    )

    const getGeneratedMatrix = (arrays, rows, elements, min, max) => Array.from(
        { length: arrays },
        () => getGeneratedArray(rows, elements, min, max)
    )

    const randomMatrix = getGeneratedMatrix(numberArrays, numberRows, numberElements, 10, 100)

    // 1)
    function getSortingRowsColumns(matrix) {
        const matrixRowsCount = matrix[0].length / 2
        const matrixElementsCount = matrix[0][0].length / 2
        let sortMatrix = []

        // Якшо треба зробити як на картинки щоб з чотирьох вложених треба було працювати
        //  лише с першим масивом, то 'matrix.length' треба замінити на '1'
        for (let indexArr = 0; indexArr < matrix.length; indexArr++) {
            let sortMatrixArr = []
            for (let indexRows = 0; indexRows < matrixRowsCount; indexRows++) {
                let sortMatrixRow = []
                for (let indexElement = 0; indexElement < matrixElementsCount; indexElement++) {
                    sortMatrixRow[indexElement] = matrix[indexArr][indexRows][indexElement]
                }
                sortMatrixArr.push(sortMatrixRow)
            }
            sortMatrix.push(sortMatrixArr)
        }

        return sortMatrix
    }

    // 2)
    function getSortingRowsColumnsHalf(matrix) {
        const matrixRowsCount = matrix[0].length / 2
        const matrixElementsCount = matrix[0][0].length / 2
        let sortMatrix = []

        // Якшо треба зробити як на картинки щоб з чотирьох вложених треба було працювати
        //  лише с першим масивом, то 'matrix.length' треба замінити на '2' і indexArr = 1
        for (let indexArr = 0; indexArr < matrix.length; indexArr++) {
            let sortMatrixArr = []
            for (let indexRows = 0; indexRows < matrixRowsCount; indexRows++) {
                let sortMatrixRow = []
                for (let indexElement = matrixElementsCount; indexElement < matrix[indexArr][indexRows].length; indexElement++) {
                    sortMatrixRow.push(matrix[indexArr][indexRows][indexElement])
                }
                sortMatrixArr.push(sortMatrixRow)
            }
            sortMatrix.push(sortMatrixArr)
        }

        return sortMatrix
    }

    // 3)
    function getSortingColumns(matrix) {
        const matrixRowsCount = matrix[0].length / 2
        const matrixElementsCount = matrix[0][0].length / 2
        let sortMatrix = []

        // Якшо треба зробити як на картинки щоб з чотирьох вложених треба було працювати
        //  лише с першим масивом, то 'matrix.length' треба замінити на '1'
        for (let indexArr = 0; indexArr < matrix.length; indexArr++) {
            let sortMatrixArr = []
            for (let indexRows = matrixRowsCount; indexRows < matrix[indexArr].length; indexRows++) {
                let sortMatrixRow = []
                for (let indexElement = 0; indexElement < matrixElementsCount; indexElement++) {
                    sortMatrixRow[indexElement] = matrix[indexArr][indexRows][indexElement]
                }
                sortMatrixArr.push(sortMatrixRow)
            }
            sortMatrix.push(sortMatrixArr)
        }

        return sortMatrix
    }

    // 4)
    function getSortingColumnsHalf(matrix) {
        const matrixRowsCount = matrix[0].length / 2
        const matrixElementsCount = matrix[0][0].length / 2
        let sortMatrix = []

        // Якшо треба зробити як на картинки щоб з чотирьох вложених треба було працювати
        //  лише с першим масивом, то 'matrix.length' треба замінити на '2' і indexArr = 1
        for (let indexArr = 0; indexArr < matrix.length; indexArr++) {
            let sortMatrixArr = []
            for (let indexRows = matrixRowsCount; indexRows < matrix[indexArr].length; indexRows++) {
                let sortMatrixRow = []
                for (let indexElement = matrixElementsCount; indexElement < matrix[indexArr][indexRows].length; indexElement++) {
                    sortMatrixRow.push(matrix[indexArr][indexRows][indexElement])
                }
                sortMatrixArr.push(sortMatrixRow)
            }
            sortMatrix.push(sortMatrixArr)
        }

        return sortMatrix
    }

    // 5)
    function getSumEvenRows(matrix) {
        const matrixEvenSum = matrix
            .flat().filter((__, indexRow) => indexRow % 2 === 0)
            .flat().reduce((prevSum, element) => prevSum + element)

        return matrixEvenSum
    }

    // 6)
    function getSumOddColumns(matrix) {
        const mutrixOddSum = matrix
            .flat(Infinity)
            .reduce((prevElement, element, indexEl) => (indexEl % 2 !== 0) ? prevElement + element : prevElement)

        // !!! Поясніть будьласка в чому різниця між першим виконанням і цим, 
        // начебто повинна бути однакова сумма, але в цьому рішенні сума меньша
        // const mutrixOddSum = matrix
        //     .flat(Infinity)
        //     .filter((__, indexEl) => indexEl % 2 !== 0)
        //     .reduce((prevElement, element) => prevElement + element)

        return mutrixOddSum
    }

    // 7)
    function getChessEvenOdd(matrix) {
        const evenOdd = matrix
            .flat().filter((__, indexRow) => indexRow % 2 === 0)
            .flat().filter((__, indexRow) => indexRow % 2 !== 0)

        return evenOdd
    }

    function getChessOddEven(matrix) {
        const oddEven = matrix
            .flat().filter((__, indexRow) => indexRow % 2 !== 0)
            .flat().filter((__, indexRow) => indexRow % 2 === 0)

        return oddEven
    }

    function getChessSum(matrix) {
        const sumChess = [...getChessEvenOdd(matrix), ...getChessOddEven(matrix)]
            .reduce((prevElement, element) => prevElement + element)

        return sumChess
    }

    function getPtintMatrix(arrMatrix) {
        let str = '</br>[</br>'

        for (const innerArrayMatrix of arrMatrix) {
            str += '&nbsp;&nbsp;&nbsp;&nbsp;[</br>'
            for (const rowMatrix of innerArrayMatrix) {
                str += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[${rowMatrix}],</br>`
            }
            str += '&nbsp;&nbsp;&nbsp;&nbsp;],</br>'
        }
        str += ']'

        return str
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Згенерований вами масив: ${getPtintMatrix(randomMatrix)}</div>
        <hr>
    `)

    function getPrintMessages(str, arrMatrix) {
        document.write(`<div style="overflow-x:auto;">${str} - ${(Array.isArray(arrMatrix)) ? getPtintMatrix(arrMatrix) : arrMatrix}</div>`)
    }

    const taskFirst = '1) Номери рядків від 0 до половини, стовпці від 0 до половини:'
    const taskSecond = '2) Номери рядків від 0 до половини, стовпці від половини до кінця:'
    const taskThird = '3) Номери рядків (від половини до кінця, стовпці від 0 до половини'
    const taskFourth = '4) Номери рядків від половини до кінця , стовпці від половини до кінця'
    const taskFifth = '5) Суму парних рядків'
    const taskSixth = '6) Суму непарних стовпців'
    const taskSeventh = '7) У парних рядках – непарні стовпці, у непарних – парні.'

    getPrintMessages(taskFirst, getSortingRowsColumns(randomMatrix))
    getPrintMessages(taskSecond, getSortingRowsColumnsHalf(randomMatrix))
    getPrintMessages(taskThird, getSortingColumns(randomMatrix))
    getPrintMessages(taskFourth, getSortingColumnsHalf(randomMatrix))
    getPrintMessages(taskFifth, getSumEvenRows(randomMatrix))
    getPrintMessages(taskSixth, getSumOddColumns(randomMatrix))
    getPrintMessages(taskSeventh, getChessSum(randomMatrix))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}