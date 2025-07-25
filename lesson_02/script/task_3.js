'use strict'

const answerCountCoffe = parseInt(prompt('У нас у продажу \'Кава в зернах TOTTI Caffe Espresso 1 кг\' вкажіть кількість кілограм:', '0'))
const coffeProduct = 795
const orderAmount = coffeProduct * answerCountCoffe
const percent = 5
const tax = orderAmount * (5 / 100)

document.write(`
    <div>
        Ваше замовлення:
        <ul>
            <li>Кількість замовдення: ${answerCountCoffe} кг</li>
            <li>Вартість замовлення: ${orderAmount} &#8372;</li>
            <li>5% ПДВ від замовлення складає: ${tax} &#8372;</li>
        </ul>
    </div>
`)