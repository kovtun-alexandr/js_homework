'use strict'

const numberCountCoffe = parseInt(prompt('У нас у продажу \'Кава в зернах TOTTI Caffe Espresso 1 кг\' вкажіть кількість кілограм:', '4'))
const coffeProduct = 795
const orderAmount = coffeProduct * numberCountCoffe
const percent = 5
const tax = orderAmount * (5 / 100)

document.write(`
    <div>
        Ваше замовлення:
        <ul>
            <li>Кількість замовдення: ${numberCountCoffe} кг</li>
            <li>Вартість замовлення: ${orderAmount} &#8372;</li>
            <li>5% ПДВ від замовлення складає: ${tax} &#8372;</li>
        </ul>
    </div>
`)