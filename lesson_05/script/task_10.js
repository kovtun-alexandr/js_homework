'use strict'

// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем
// числами.

if (confirm('Почати тестування?')) {
    const firstNumber = parseInt(prompt('Введіть перше число:', '5'))
    const secondNumber = parseInt(prompt('Введіть друге число:', '25'))
    let sumNumber = 0

    if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            if (i % 2 === 1)
                sumNumber += i
        }
        document.write(`Суму всіх непарних чисел від ${firstNumber} до ${secondNumber} дорівнює ${sumNumber}`)
    } else {
        document.write('Ви зробили помилку, Спробуйте ще раз!')
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}