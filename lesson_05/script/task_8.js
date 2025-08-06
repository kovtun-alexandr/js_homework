'use strict'

// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число
// користувача (використати confirm)

if (confirm('Почати тестування?')) {
    const numberGuess = parseInt(prompt('Загадайте число:', '4'))
    let searchNumber = 5

    for (let i = 3; i > 0; i--) {
        const userRespon = confirm(`Ваше число більше за ${searchNumber}? В мене є ${i} спроби`)
        if (userRespon)
            searchNumber += 2
        else searchNumber -= 1
        if (numberGuess === searchNumber) {
            document.write(`Вітаю компьютер впорався і вгадав ваше число ${numberGuess}`)
            break
        }

    }
    if (numberGuess !== searchNumber)
        document.write(`Нажаль компьютер не вгадав ваше число ${numberGuess}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}