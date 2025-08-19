'use strict'

// Дано масив цін у грн. Податок складає 20%. Сформувати масив, 
// який буде містити величину сплаченого податку у грн.

if (confirm('Почати тестування?')) {
    function getCreatingPriceArray(num) {
        const getRandomNum = () => Math.floor(Math.random() * 1500) + 300
        const newArr = new Array()

        for (let i = 0; i < num; i++) {
            newArr[i] = getRandomNum();
        }

        return newArr
    }

    const elementsNumbers = parseInt(prompt('Вкажіть кількість елементів масиву:', '10'))
    const creatingPrice = getCreatingPriceArray(elementsNumbers)

    function getTax(arr) {
        const taxArr = arr.map((price) => price * 0.20)

        return taxArr
    }

    function getPrintMessages(arr) {
        document.write(`<di>20% податку складає: ${arr}</di>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Згенероаваний масив цін = \[${creatingPrice}\]</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getTax(creatingPrice))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}