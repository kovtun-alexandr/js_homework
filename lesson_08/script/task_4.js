'use strict'

// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// починаються на букву «А»
// перша і остання літери співпадають
// складаються з більше ніш 5 символів

if (confirm('Почати тестування?')) {
    // Це згенеровано за допомогою ШІ щоб не робити масив в ручну 
    // (Але у мене є питання ==> Генерувати букви і цифри так як я зробив, 
    // чи креще перемістити це у функцію getCarNumbers?)
    const letters = "АВЕКМНОРСТУХ"
    const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
    const getDigit = () => Math.floor(Math.random() * 10)

    function getCarNumbers(num) {
        const newArr = []
        for (let i = 0; i < num; i++) {
            const plate = `${getLetter()}${getLetter()}${getDigit()}${getDigit()}${getDigit()}${getDigit()}${getLetter()}${getLetter()}`;
            newArr.push(plate);
        }

        return newArr
    }

    const carNumbers = getCarNumbers(30)

    function getSearchFirstLetter(symbol, arr) {
        let count = 0
        const newCarNumbers = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].charAt(0) === symbol) {
                newCarNumbers.push(arr[i])
                count++
            }
        }

        if (count === 0) return `Нажаль немає жодного номера який починається на ${symbol}`
        return `${count} : ${newCarNumbers}`
    }

    function getSameLetters(arr) {
        let count = 0
        const newCarNumbers = []

        for (let i = 0; i < arr.length; i++) {
            const str = arr[i]
            if (str.charAt(0) === str[str.length - 1]) {
                newCarNumbers.push(str)
                count++
            }
        }

        if (count === 0) return `Нажаль немає жодного номера не співпадають перша і остання літеера`
        return `У ${count} перша і остання літери співпадають : ${newCarNumbers}`
    }

    function getNumberLength(arr) {
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            const str = arr[i];
            if (str.length > 5) count++
        }

        return count
    }

    function getPrintMessages(...parameters) {
        document.write(`
            <ul>
                <li>Починаються на букву «А» ${parameters[0]}</li>
                <li>${parameters[1]}</li>
                <li>У ${parameters[2]}-й номерів, довжина складаються з більше ніш 5 символів</li>
            </ul>    
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <p>Номери автомобілів:</p>
        <ul>
            <li style="width:100%;overflow-x:scroll;">${carNumbers}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(
        getSearchFirstLetter('А', carNumbers),
        getSameLetters(carNumbers),
        getNumberLength(carNumbers)
    )
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}