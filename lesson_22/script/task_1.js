'use strict'

// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість 
// змін протягом одного сеансу.

if (confirm('Почати тестування?')) {
    class BGColor {
        constructor(bodyEl, inputEl, btnEl) {
            this.bodyEl = document.querySelector(bodyEl)
            this.inputEl = document.querySelector(inputEl)
            this.btnEl = document.querySelector(btnEl)
            this.count = parseInt(sessionStorage.getItem('count')) || 0 
            this.addColor()

            this.btnEl.addEventListener('click', this.changeColor.bind(this))
            window.addEventListener('storage', this.onChangeStorage)
        }

        changeColor() {
            const countEl = document.getElementById('count')

            countEl.innerText = this.countChange()
    
            localStorage.setItem('color', this.inputEl.value)
            this.bodyEl.style.backgroundColor = localStorage.getItem('color')
        }

        addColor() {
            const color = localStorage.getItem('color')

            console.log(color)
    
            if(!color) {
                this.inputEl.value = this.GetBGColorBody()
            } else {
                this.bodyEl.style.backgroundColor = color
                this.inputEl.value = color
            }
        }

        countChange() {
            this.count++

            sessionStorage.setItem('count', this.count)

            return this.count
        }

        onChangeStorage() {
            this.addColor()
        }

        getBGColorBody() {
            const style = window.getComputedStyle(this.bodyEl)
            const bgColor = style.backgroundColor.replace(/rgb\(|\)/g, '')
            const [r, g, b] = bgColor.split(',').map(num => parseInt(num.trim()))

            return this.rgbToHex(r, g, b)
        }

        rgbToHex(r, g, b) {
            function componentToHex(c) {
                const hex = c.toString(16)
                return hex.length === 1 ? "0" + hex : hex
            }
            
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
    }
    
    window.addEventListener('load', () => {
        document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})
        
        const bgColor = new BGColor('body', '.form__input', '.form__btn')
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}