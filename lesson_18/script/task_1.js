'use strict'
// Розробити калькулятор

if (confirm('Почати тестування?')) {
    function getAddition() {
        const firstNum = parseInt(document.getElementById('firstNumber').value)
        const secondNum = parseInt(document.getElementById('secontNumber').value)
        let sum = 0

        if(!isNaN(firstNum) && !isNaN(secondNum)) 
            sum = firstNum + secondNum 
        else 
            sum = ''

        document.getElementById('result').value = sum       
    }

    function getSubtraction() {
        const firstNum = parseInt(document.getElementById('firstNumber').value)
        const secondNum = parseInt(document.getElementById('secontNumber').value)
        let sum = 0

        if(!isNaN(firstNum) && !isNaN(secondNum)) 
            sum = firstNum - secondNum
        else 
            sum = ''

        document.getElementById('result').value = sum       
    }

    function getMultiplication() {
        const firstNum = parseInt(document.getElementById('firstNumber').value)
        const secondNum = parseInt(document.getElementById('secontNumber').value)
        let sum = 0

        if(!isNaN(firstNum) && !isNaN(secondNum)) 
            sum = firstNum * secondNum
        else 
            sum = ''

        document.getElementById('result').value = sum       
    }

    function getDivision() {
        const firstNum = parseInt(document.getElementById('firstNumber').value)
        const secondNum = parseInt(document.getElementById('secontNumber').value)
        let sum = 0
        if (isNaN(firstNum) && isNaN(secondNum) || secondNum <= 0 ) {
            sum = ''
        } else {
            sum = firstNum / secondNum

        }

        document.getElementById('result').value = sum       
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