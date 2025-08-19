'use strict'

// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {
    function getCreatingArray(num) {
        const getRandomNum = () => Math.floor(Math.random() * 200) + 1
        const newArr = new Array()

        for (let i = 0; i < num; i++) {
            newArr[i] = getRandomNum();
        }

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))
    const creatingArr = getCreatingArray(elementsNumbers)

    function getMultiplies(arr) {
        const firstElement = arr[0]

        arr.forEach((element, index, baseArr) => {
            if (element > firstElement) baseArr[index] *= 2
        });

        return arr
    }

    function getPrintMessages(arr) {
        document.write(`<di>Новий масив елементів: ${arr}</di>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Згенероаваний масив = \[${creatingArr}\]</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getMultiplies(creatingArr))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}