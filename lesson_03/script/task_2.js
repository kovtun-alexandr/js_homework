// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці,
// інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt('Введіть ціну товара:', '10.5'))
const moneyPerson = parseFloat(prompt('Введіть кількість грошей яку маєте для покупки:', '10'))
const messageSuccess = 'Дякуємо за покупку &#128521;'

if (moneyPerson >= productPrice) {
    if ((moneyPerson % productPrice) >= 4) {
        const lotteryTicket = confirm('Бажаете придбати лотерею за 4 грн.?')

        if (lotteryTicket) {
            document.write(`${messageSuccess} Бажаємо перемогти в лотореї &#127881;`)
        } else {
            document.write(`${messageSuccess} Але нажаль ви відмовились від лотореї &#128527;`)
        }
    } else {
        document.write(`${messageSuccess}`)
    }
} else {
    document.write(`Нажаль у вас не вистачае грошей на купівлю данного товару &#128543;`)
}