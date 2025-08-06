'use strict'

if (confirm('Почати тестування?')) {
    for (let i = 1; i <= 10; i++) {
        document.write(`Product # ${i} <input type="text" name="price" placeholder="Product price"><br>`)
    }
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}