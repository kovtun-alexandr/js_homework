'use strict'

// Випадково вибираємо зображення у 3 позиціях. 
// Вибір у кожній позиції вибирається як одне з чотирьох зображень. 
// Вивести ці зображення і повідомити виграш користувача 
// (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).
// Використати цикли і switch (для вибору зображення за номером).

if (confirm('Почати тестування?')) {
    let imgSrc,
        bananaCount = 0,
        lemonCount = 0,
        cherryCount = 0,
        strawberryCount = 0
    const printMessage = 'Вітаємо ваш виграш складає'

    document.write(`<table style="border:3px solid blue;margin: 0 auto;">`)
    for (let i = 0; i < 3; i++) {
        const randomMunber = 1 + Math.floor(Math.random() * 4)
        switch (randomMunber) {
            case 1:
                imgSrc = './image/banana.jpg'
                bananaCount++
                break;
            case 2:
                imgSrc = './image/lemon.jpg'
                lemonCount++
                break;
            case 3:
                imgSrc = './image/cherry.png'
                cherryCount++
                break;
            case 4:
                imgSrc = './image/strawberry.jpg'
                strawberryCount++
                break;
            default:
                break;
        }
        document.write(`<td style="border:3px solid black"><img width="150px" src="${imgSrc}" alt="image"></td>`)
    }
    document.write(`</table>`)

    document.write('<div style="text-align:center;font-size:25px;">')
    if (bananaCount === 3) document.write(`${printMessage} 100гр`)
    else if (lemonCount === 3) document.write(`${printMessage} 200гр`)
    else if (cherryCount === 3) document.write(`${printMessage} 500гр`)
    else if (strawberryCount === 3) document.write(`${printMessage} 1000гр`)
    else document.write('Шкода, але ви нічого не виграли. Спробуйте іншим разом')
    document.write('</div>')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}