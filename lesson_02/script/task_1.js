'use strict'

const numberOne = parseInt(prompt('Введіть значення a', '25'))
const numbertwo = parseInt(prompt('Введіть значення b', '3'))

const sum = numberOne + numbertwo
const product = numberOne * numbertwo
const fraction = numberOne / numbertwo

document.write(`
  <table>
    <tr>
      <th>Операція</th>
      <th>Результат</th>
    </tr>
    <tr>
      <td>Сума</td>
      <td>${numberOne} + ${numbertwo} = ${sum}</td>
    </tr>
    <tr>
      <td>Добуток</td>
      <td>${numberOne} * ${numbertwo} = ${product}</td>
    </tr>
    <tr>
      <td>Частка</td>
      <td>${numberOne} % ${numbertwo} = ${fraction}</td>
    </tr>
  </table>    
`)