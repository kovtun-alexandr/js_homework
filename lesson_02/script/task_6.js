'use strict'

const costGoods = parseInt(prompt('Вкажіть вартість товару', '0'))
const quantityGoods = parseInt(prompt('Вкажіть кількість товару', '0'))
const total = costGoods * quantityGoods

document.write(`
    <table>
    <tr>
      <td style="width:200px">Вартість продукта:</td>
      <td>${costGoods} &#8372;</td>
    </tr>
    <tr>
      <td>Кількість продукта:</td>
      <td>${quantityGoods} шт.</td>
    </tr>
    <tr>
      <td>Cумма:</td>
      <td>${total} &#8372;</td>
    </tr>
  </table>  
`)