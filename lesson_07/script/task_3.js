'use strict'

if (confirm('Почати тестування?')) {
    function getAmount(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4
    }

    const getProduct = (num1, num2, num3, num4) => num1 * num2 * num3 * num4

    const getMean = function (num1, num2, num3, num4) {
        return (num1 + num2 + num3 + num4) / 4
    }

    function getMin(num1, num2, num3, num4) {
        let min = Infinity
        if (num1 < num2) min = num1
        if (num2 < min) min = num2
        if (num3 < min) min = num3
        if (num4 < min) min = num4

        return min
    }

    const numberFirst = parseInt(prompt('Введіть перше число:', '3'))
    const numberSecond = parseInt(prompt('Введіть друге число:', '3'))
    const numberThird = parseInt(prompt('Введіть трете число:', '3'))
    const numberFourth = parseInt(prompt('Введіть четверте число:', '3'))

    document.write(`
        <p>Веденні числа  1: ${numberFirst}, 2: ${numberSecond}, 3: ${numberThird}, 4: ${numberFourth}</p>
        <ol>
            <li>Суму - ${getAmount(numberFirst, numberSecond, numberThird, numberFourth)}</li>
            <li>Добуток - ${getProduct(numberFirst, numberSecond, numberThird, numberFourth)}</li>
            <li>Середнє арифметичне - ${getMean(numberFirst, numberSecond, numberThird, numberFourth)}</li>
            <li>Мінімальне значення - ${getMin(numberFirst, numberSecond, numberThird, numberFourth)}</li>
        </ol>
    `)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}