'use strict'

// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

if (confirm('Почати тестування?')) {
    // My code
    const randomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
    
    function* evenNumbers(count, min, max) {      
        for (let i = 0; i < count; i++) {
            let num

            do {
                num = randomNumber(min, max)
            } while (num % 2 !== 0)

            yield num
        }
    }

    function render(num, parentSection) {
        const divEl = document.querySelector(parentSection)

        for (const el of num) {
            const spanEl = document.createElement('span')
            spanEl.innerText = `${el}, `
            divEl.append(spanEl)
        }
    }

    window.addEventListener('load', () => {
        const evNum = evenNumbers(20, 2, 100)
        render(evNum, '.blok-answer')
    })

    // This is how he advised me to optimize my AI code
    // const randomEven = (min, max) => {
    //     if (min % 2 !== 0) min++;
    //     const range = Math.floor((max - min) / 2);
    //     return min + Math.floor(Math.random() * (range + 1)) * 2;
    // };

    // function* evenNumbers(count, min, max) {
    //     for (let i = 0; i < count; i++) {
    //         yield randomEven(min, max);
    //     }
    // }

    // function render(numbers) {
    //     const divEl = document.querySelector('.answer__block');
    //     divEl.innerHTML = [...numbers].join(', ');
    // }

    // window.addEventListener('load', () => {
    //     const evNum = evenNumbers(20, 2, 100);
    //     render(evNum);
    // });
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}