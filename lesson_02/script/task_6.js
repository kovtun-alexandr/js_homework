'use strict'

const costGoodsFirst = parseInt(prompt('Вкажіть вартість першого товару', '120'))
const quantityGoodsFirst = parseInt(prompt('Вкажіть кількість першого товару', '3'))
const costGoodsSecond = parseInt(prompt('Вкажіть вартість другог товару', '45'))
const quantityGoodsSecond = parseInt(prompt('Вкажіть кількість другого товару', '4'))
const costGoodsThird = parseInt(prompt('Вкажіть вартість третього товару', '110'))
const quantityGoodsThird = parseInt(prompt('Вкажіть кількість третього товару', '2'))
const sumFirst = costGoodsFirst * quantityGoodsFirst
const sumSecond = costGoodsSecond * quantityGoodsSecond
const sumThird = costGoodsThird * quantityGoodsThird
const total = sumFirst + sumSecond + sumThird

document.write(`
    <table style='font-family:sans-serif;'>
    <tr>
    <th>Фіскальний чек</th>
    </tr>
    <tr>
    <th>-------------------------------------</th><th>------------</th>
    </tr>
    <tr>
      <td style="width:200px">Перший товар ${quantityGoodsFirst} x ${costGoodsFirst} </td>
      <td>${sumFirst} &#8372;</td>
    </tr>
    <tr>
      <td style="width:200px">Другий товар ${quantityGoodsSecond} x ${costGoodsSecond} </td>
      <td>${sumSecond} &#8372;</td>
    </tr>
    <tr>
      <td style="width:200px">Третій товар ${quantityGoodsThird} x ${costGoodsThird} </td>
      <td>${sumThird} &#8372;</td>
    </tr>
    <tr>
    <th>-------------------------------------</th><th>------------</th>
    <tr>
      <td>Cумма:</td>
      <td>${total} &#8372;</td>
    </tr>
  </table>  
`)