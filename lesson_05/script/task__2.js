'use strict'

if (confirm('Почати тестування?')) {
    let evenNumber = 0
    let notEvenNumber = 0

    for (let i = 1; i <= 100; i++) {
        const randomNum = 1 + Math.floor(Math.random() * (1000));
        document.write(`${i}: ${randomNum} <br>`)
        if (randomNum % 2 === 0)
            evenNumber++
        else
            notEvenNumber++
    }

    if (evenNumber > notEvenNumber)
        document.write(`<br> Більше парних чисел: ${evenNumber}`)
    else
        document.write(`<br> Більше не парних чисел: ${notEvenNumber}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}

