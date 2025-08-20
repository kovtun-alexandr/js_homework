'use strict'

// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, 
// а друга заповнена 7-ками.

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const countElement = Math.floor(num / 2)
        const newArr = new Array(num).fill(1, 0, countElement).fill(7, countElement)

        return newArr
    }

    function getPrintMessages(arr) {
        document.write(`<div>Створений вами массив \[${arr}\]</div>`)
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Кількість елементів яку ви вказали: ${elementsNumbers}</li>
        </ul>
        <hr>
        `)

    const creatingArr = getCreatingArray

    getPrintMessages(creatingArr(elementsNumbers))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}