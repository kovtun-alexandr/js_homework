'use strict'

const answerOne = parseInt(prompt('Введіть значення a', '25'))
const answertwo = parseInt(prompt('Введіть значення b', '3'))

const sum = answerOne + answertwo
const product = answerOne * answertwo
const fraction = answerOne % answertwo

document.write(`
  <table>
    <tr>
      <th>Операція</th>
      <th>Результат</th>
    </tr>
    <tr>
      <td>Сума</td>
      <td>${answerOne} + ${answertwo} = ${sum}</td>
    </tr>
    <tr>
      <td>Добуток</td>
      <td>${answerOne} * ${answertwo} = ${product}</td>
    </tr>
    <tr>
      <td>Частка</td>
      <td>${answerOne} % ${answertwo} = ${fraction}</td>
    </tr>
  </table>    
`)