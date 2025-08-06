'use strict'

if (confirm('Почати тестування?')) {
    const paragraphNumber = parseInt(prompt('Вивести кшлькість абзаців:', ''))
    for (let i = 1; i <= paragraphNumber; i++) {
        document.write(`<h1>Заголовок ${i}</h1>`)
        for (let j = 1; j <= paragraphNumber; j++) {
            document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
        }
        document.write('<br>')
    }

} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}