'use strict'

// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, 
// які може собі дозволити користувач (кількість грошей задається). 
// Приклад збереження даних:

if (confirm('Почати тестування?')) {
    function getRandomePrices(arr) {
        const newArr = []
        const min = 10
        const max = 1000

        for (let i = 0; i < arr.length; i++) {
            newArr.push(Math.floor(Math.random() * max) + min);
        }

        return newArr
    }

    const productTitles = [
        'Хліб', 'Молоко', 'Сир', 'Яблука', 'Кава',
        'Чай', 'Цукор', 'Сіль', 'Масло', 'Картопля',
        'Морква', 'Банани', 'Апельсини', 'Ковбаса', 'М\'ясо',
        'Курка', 'Йогурт', 'Печиво', 'Шоколад', 'Майонез'
    ];

    const productPrices = getRandomePrices(productTitles);

    const clientMoney = parseFloat(prompt('Скільки коштів у вас є, які ви готові витратити:', '100'))

    function getSortProduct(arr1, arr2, price) {
        const newArr = []

        for (let i = 0; i < arr1.length; i++) {
            if (price >= arr1[i]) {
                newArr.push(`${arr2[i]} - ціна: ${arr1[i]}`)
            }
        }

        if (newArr.length == 0) {
            newArr.push(`Нажаль ваших коштів ${price} не вистачає! Щоб щось придбати.`)
        }

        return newArr
    }

    function getPrintMessages(arr) {
        let str = ''

        for (let i = 0; i < arr.length; i++) {
            str += `<li>${arr[i]}</li>`
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