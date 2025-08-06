'use strict'

// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача
// (використати confirm).

if (confirm('Почати тестування?')) {
    const guessNumber = parseInt(prompt('Загадайте число:', '4'))
    let searchNumber = 5,
        attemptsNumber = 0

    while (guessNumber !== searchNumber) {
        const userRespon = confirm(`Ваше число більше за ${searchNumber}?`)
        if (userRespon) {
            searchNumber += 2
            attemptsNumber++
        } else {
            searchNumber -= 1
            attemptsNumber++
        }
    }

    if (guessNumber === searchNumber) {
        document.write(`Вітаю компьютер впорався і вгадав ваше число ${guessNumber} Йому знадобилось ${attemptsNumber} спроб`)
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}