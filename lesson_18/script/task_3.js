'use strict'

// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту 
// (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) 
// та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. 
// Підрахувати загальну вартість.

if (confirm('Почати тестування?')) {
    function getCalculate() {
        const transport = parseInt(document.getElementById('transport').value)
        const foods = document.querySelectorAll('.food__input')
        const guides = document.querySelectorAll('.guide__input')
        let sum = 0

        if (transport > 0)
            sum += transport

        for (const element of foods) {
            if(element.checked)
                sum += parseInt(element.value)
        }

        for (const element of guides) {
            if(element.checked)
                sum += parseInt(element.value)
        }

        document.getElementById('trip__sum').textContent = `${sum}`
    }

    window.onload = function() {
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault()
        });
        document.querySelector('#calculate').onclick = getCalculate
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}