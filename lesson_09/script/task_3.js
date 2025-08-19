'use strict'

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const newArr = new Array(num).fill(1, 0, 5).fill(7, 5)

        return newArr
    }
    function getPrintMessages(arr) {
        document.write(`<div>Створений вами масив \[${arr}\]</div>`)
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