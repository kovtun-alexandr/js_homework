'use strict'

// Користувач вводить кількість елементів. Створити масив, що складається з вказаної 
// кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const newArr = new Array(num).fill(0)

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))
    const creatingArr = getCreatingArray

    function getPrintMessages(arr) {
        document.write(`<div>Створений вами масив \[${arr}\]</div>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Кількість елементів яку ви вказали: ${elementsNumbers}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(creatingArr(elementsNumbers))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}