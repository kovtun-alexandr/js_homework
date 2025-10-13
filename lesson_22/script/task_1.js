'use strict'

// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість 
// змін протягом одного сеансу.

if (confirm('Почати тестування?')) {
    function changeColor() {
        const inputColor = document.querySelector('.form__input')
        const bodyEl = document.querySelector('body')
        const countEl = document.getElementById('count')
        
        countEl.innerText = countChange()

        localStorage.setItem('color', inputColor.value)
        bodyEl.style.backgroundColor = localStorage.getItem('color')
    }

    function addColor() {
        const bodyEl = document.querySelector('body')
        const inputEl = document.querySelector('.form__input')
        const color = localStorage.getItem('color')

        if(!color) {
            inputEl.value = bgColorBody()
        } else {
            bodyEl.style.backgroundColor = color
            inputEl.value = color
        }
    }

    function countChange() {
        let count = parseInt(sessionStorage.getItem('count')) || 0
        count++

        sessionStorage.setItem('count', count)

        return count
    }

    function bgColorBody() {
        const bodyEl = document.querySelector('body')
        const style = window.getComputedStyle(bodyEl)
        const bgColor = style.backgroundColor.replace(/rgb\(|\)/g, '')
        const [r, g, b] = bgColor.split(',').map(num => parseInt(num.trim()))

        return rgbToHex(r, g, b)
    }
     
    function rgbToHex(r, g, b) {
        function componentToHex(c) {
            const hex = c.toString(16)
            return hex.length === 1 ? "0" + hex : hex
        }
        
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function onChangeStorage(event) {
        addColor()
    }
    
    window.addEventListener('load', () => {
        addColor()
        document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})
        document.querySelector('.form__btn').addEventListener('click', changeColor)
        window.addEventListener('storage', onChangeStorage)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}