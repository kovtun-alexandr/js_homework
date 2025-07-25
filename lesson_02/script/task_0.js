'use strict'

const answerOne = parseInt(prompt('Введіть значення a:', '0'))
const answerTwo = parseInt(prompt('Введіть значення b:', '0'))
const answerThree = parseInt(prompt('Введіть значення c:', '0'))

// task 1:
const sumOne = answerOne + 12 + answerTwo

// task 2:
const sumTwo = Math.sqrt((answerOne + answerTwo) / (2 * answerOne))

// task 3:
const sumThree = Math.cbrt((answerOne + answerTwo) * answerThree)

// task 4:
const sumFour = Math.sin(answerOne / -answerTwo)

document.write(`
    <div>Відповідь:</div>
    <ol>
        <li>Сума дорівнює: ${sumOne} = ${answerOne} + 12 + ${answerTwo} </li>
        <li>Сума дорівнює: ${sumTwo} = &radic; (${answerOne} + ${answerTwo}) / (2 * ${answerOne})</li>
        <li>Сума дорівнює: ${sumThree} = &#8731; (${answerOne} + ${answerTwo}) * ${answerThree})</li>
        <li>Сума дорівнює: ${sumFour} = sin (${answerOne} / ${-answerTwo})</li>
    </ol>
    `)