'use strict'

// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('Почати тестування?')) {

    function getCreatingPriceArray(num) {
        const getRandomNum = () => Math.floor(Math.random() * 1500) + 300
        const newArr = new Array()

        for (let i = 0; i < num; i++) {
            newArr[i] = getRandomNum();
        }

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів массиву:', '10'))
    const creatingArr = getCreatingPriceArray(elementsNumbers)

    function getDiscounts(arr) {
        arr.forEach((element, index, baseArr) => {
            if (element > 1000) baseArr[index] *= 0.7
        });

        return arr
    }

    function getPrintMessages(arr) {
        document.write(`<di>Змінені ціни з урахуванням умови: ${arr}</di>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Ціни на товари ${creatingArr}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getDiscounts(creatingArr))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}