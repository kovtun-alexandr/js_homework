'use strict'

// Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const getRandomNum = () => Math.floor(Math.random() * 200) - 50
        const newArr = new Array()

        for (let i = 0; i < num; i++) {
            newArr[i] = getRandomNum();
        }

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))
    const creatingArr = getCreatingArray(elementsNumbers)

    function getAmount(arr) {
        let sumNumber = 0

        for (const element of arr) {
            if (element > 0) sumNumber += element
        }

        return sumNumber
    }

    function getPrintMessages(num) {
        document.write(`<di>Добуток додатних елементів: ${num}</di>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Масив = \[${creatingArr}\]</li>
        </ul>
        <hr>
    `)

    const sumElements = getAmount(creatingArr)
    getPrintMessages(sumElements)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}