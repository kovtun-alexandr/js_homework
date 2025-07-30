// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const randomNumber = Math.floor(Math.random() * 5) + 1
const numberFirst = parseInt(prompt('Спробуйте вгадати число від 1 до 5 за 2 спроби. Спроба №1', ''))
const messageSuccess = `Ви молодець, ви вгадали число &#127878; Це було \"${randomNumber}\"`

if (randomNumber !== numberFirst) {
    alert(`Нажаль ви не вгадали 😞 Але у вас є остання спроба!`)
    const numberSecond = parseInt(prompt('Спробуйте вгадати число від 1 до 5 за 2 спроби. Спроба №2', ''))
    if (numberSecond === randomNumber) {
        document.write(messageSuccess)
    } else {
        document.write(`Нажаль ви не впорались &#129402; Спробуйте іншого разу &#128521;`)
    }
} else {
    document.write(messageSuccess)
}