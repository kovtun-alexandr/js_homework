'use strict'

if (confirm('Почати тестування?')) {
    const numberElements = parseInt(prompt('Введіть кідбкість елементів списку:', '4'))
    document.write('<ul>')
    for (let i = 0; i < numberElements; i++) {
        const randomNumber = 1 + Math.floor(Math.random() * 100)
        document.write(`<li>${randomNumber}</li>`)
    }
    document.write('</ul>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}