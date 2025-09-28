'use strict'
// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично 
// заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 
// 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)

if (confirm('Почати тестування?')) {
    function fillInputs(e) {
        const inputs = Array.from(document.querySelectorAll('.form__input'))
        let value = parseInt(e.target.value)
        if (isNaN(value)) return

        const index = inputs.indexOf(e.target)

        inputs.forEach((input, i) => {
            input.value = value + (i - index)
        }) 
    }
    
    window.addEventListener('load', () => {
        document.querySelector('form').addEventListener('change', fillInputs)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}