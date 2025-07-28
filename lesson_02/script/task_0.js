'use strict'

const numberOne = parseInt(prompt('Введіть значення a:', '18'))
const numberTwo = parseInt(prompt('Введіть значення b:', '5'))
const numberThree = parseInt(prompt('Введіть значення c:', '22'))

// task 1:
const sumOne = numberOne + 12 + numberTwo

// task 2:
const sumTwo = Math.sqrt((numberOne + numberTwo) / (2 * numberOne))

// task 3:
const sumThree = Math.cbrt((numberOne + numberTwo) * numberThree)

// task 4:
const sumFour = Math.sin(numberOne / -numberTwo)

document.write(`
    <div>Відповідь:</div>
    <ol>
        <li>Сума дорівнює: ${sumOne} = ${numberOne} + 12 + ${numberTwo} </li>
        <li>Сума дорівнює: ${sumTwo} = &radic; (${numberOne} + ${numberTwo}) / (2 * ${numberOne})</li>
        <li>Сума дорівнює: ${sumThree} = &#8731; (${numberOne} + ${numberTwo}) * ${numberThree})</li>
        <li>Сума дорівнює: ${sumFour} = sin (${numberOne} / ${-numberTwo})</li>
    </ol>
    `)