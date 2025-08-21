'use strict'

// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, 
// які може собі дозволити користувач (кількість грошей задається). 
// Приклад збереження даних:

if (confirm('Почати тестування?')) {
    function getRandomePrices(titleArr) {
        const newPriceArr = []
        const min = 10
        const max = 1000

        for (let i = 0; i < titleArr.length; i++) {
            newPriceArr.push(Math.floor(Math.random() * max) + min);
        }

        return newPriceArr
    }

    const productTitles = [
        'Хліб', 'Молоко', 'Сир', 'Яблука', 'Кава',
        'Чай', 'Цукор', 'Сіль', 'Масло', 'Картопля',
        'Морква', 'Банани', 'Апельсини', 'Ковбаса', 'М\'ясо',
        'Курка', 'Йогурт', 'Печиво', 'Шоколад', 'Майонез'
    ];

    const productPrices = getRandomePrices(productTitles);

    const clientMoney = parseFloat(prompt('Скільки коштів у вас є, які ви готові витратити:', '100'))

    function getSortProduct(priceArr, titleArr, price) {
        const newProducrArr = []

        for (let i = 0; i < priceArr.length; i++) {
            if (price >= priceArr[i]) {
                newProducrArr.push(`${titleArr[i]} - ціна: ${priceArr[i]}`)
            }
        }

        if (newProducrArr.length == 0) {
            newProducrArr.push(`Нажаль ваших коштів ${price} не вистачає! Щоб щось придбати.`)
        }

        return newProducrArr
    }

    function getPrintMessages(productArr) {
        let str = ''

        for (let i = 0; i < productArr.length; i++) {
            str += `<li>${productArr[i]}</li>`
        }

        document.write(`
            <p>Вам доступні такі товари:</p>
            <ul>
                ${str}
            </ul>    
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Ціни - ${productPrices}</li>
            <li>Перелік - ${productTitles}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getSortProduct(productPrices, productTitles, clientMoney))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}