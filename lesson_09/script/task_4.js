'use strict'

// Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const getRandomNum = () => Math.floor(Math.random() * 150) + 50
        const newArr = new Array()

        for (let i = 0; i < num; i++) {
            newArr[i] = getRandomNum();
        }

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))
    const creatingArr = getCreatingArray


    function getPrintMessages(arr) {
        for (const element of arr) {
            if (element > 100)
                document.write(`${element}</br>`)
        }
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Массив = \[${creatingArr(elementsNumbers)}\]</li>
            <li>Елементи що більші за 100:</li>
        </ul>
        <hr>
    `)

    getPrintMessages(creatingArr(elementsNumbers))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}