'use strict'
// Розробити калькулятор

if (confirm('Почати тестування?')) {
    function calculation (operand) {
        const firstNum = parseInt(document.getElementById('firstNumber').value)
        const secondNum = parseInt(document.getElementById('secontNumber').value)

        if(!isNaN(firstNum) && !isNaN(secondNum)) {
            if (operand === '+')
                return firstNum + secondNum
            if (operand === '-')
                return firstNum - secondNum
            if (operand === '*')
                return firstNum * secondNum
            if (operand === '/') {
                if (secondNum > 0)
                    return firstNum / secondNum
                else
                    return '' 
            }
        }

        return ''
    }

    function getAddition() {
        document.getElementById('result').value = calculation('+')    
    }

    function getSubtraction() {
        document.getElementById('result').value = calculation('-')    
    }

    function getMultiplication() {
        document.getElementById('result').value = calculation('*')     
    }

    function getDivision() {
        document.getElementById('result').value = calculation('/')     
    }

    window.onload = function () {
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault()
        });
        document.getElementById('addition').onclick = getAddition
        document.getElementById('subtraction').onclick = getSubtraction
        document.getElementById('multiplication').onclick = getMultiplication
        document.getElementById('division').onclick = getDivision
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}