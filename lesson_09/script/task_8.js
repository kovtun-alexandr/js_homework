'use strict'

// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування?')) {
    function getCreateCarNumbers(num) {
        const letters = "АВЕКМНОРСТУХ"
        const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
        const getDigit = () => Math.floor(Math.random() * 10)
        const newArr = []
        for (let i = 0; i < num; i++) {
            const plate = `${getLetter()}${getLetter()}${getDigit()}${getDigit()}${getDigit()}${getDigit()}${getLetter()}${getLetter()}`;
            newArr.push(plate);
        }

        return newArr
    }

    const numberCarNumbers = parseInt(prompt('Вкажіть кількість кількість номерів:', '10'))
    const carNumbers = getCreateCarNumbers(numberCarNumbers)

    function getSortingCarNumbers(arr) {
        const sortingNumbers = []

        arr.forEach(element => {
            if (element.charAt(0) === 'А') sortingNumbers.push(element) // або element[0]
        });

        return sortingNumbers
    }

    function getPrintMessages(arr) {
        (arr.length > 0)
            ? document.write(`<di>Номери які починаються на «А»: ${arr}</di>`)
            : document.write('Нажаль жодного номера який починаються на «А»')
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li style="width:100%;overflow-x:scroll;">Масив номерів \[${carNumbers}\]</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getSortingCarNumbers(carNumbers))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}