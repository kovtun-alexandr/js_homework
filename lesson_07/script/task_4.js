'use strict'

// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, 
// кількість додатних, кількість більших за 100.

if (confirm('Почати тестування?')) {
    function getEvenNumbers(num1, num2, num3) {
        let count = 0

        if (num1 % 2 === 0) count++
        if (num2 % 2 === 0) count++
        if (num3 % 2 === 0) count++

        return count
    }

    function getNumberPositive(num1, num2, num3) {
        let count = 0

        if (num1 > 0) count++
        if (num2 > 0) count++
        if (num3 > 0) count++

        return count
    }

    function getNumberGreater(num1, num2, num3) {
        let count = 0

        if (num1 > 100) count++
        if (num2 > 100) count++
        if (num3 > 100) count++

        return count
    }

    const numberFirst = parseInt(prompt('Введіть перше число:', '120'))
    const numberSecond = parseInt(prompt('Введіть друге число:', '-20'))
    const numberThird = parseInt(prompt('Введіть трете число:', '30'))

    const even = getEvenNumbers(numberFirst, numberSecond, numberThird)
    const positive = getNumberPositive(numberFirst, numberSecond, numberThird)
    const greater = getNumberGreater(numberFirst, numberSecond, numberThird)

    document.write(`
        <ul>
            <li>Парних: ${even}</li>
            <li>Доданих: ${positive}</li>
            <li>Більших за 100: ${greater}</li>
        </ul>    
    `)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}