'use strict'

// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок
// та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у
// середині тега a: <a> \<img src=”шлях”> </a>

if (confirm('Почати тестування?')) {
    function getMakeBanner(img, title, link) {
        const banner = `
            <div style="position:relative;">
                <a href="${link}" target="_blank">
                    <img src="${img}" alt="Image">
                    <h2 style="position:absolute;color:#fff;top:33%;left:40px;">${title}</h2>
                </a>
            </div>
        `

        return banner
    }

    document.write(`${getMakeBanner(
        './image/banner.jpg',
        'Нічний розпродаж <span style="color:yellow">До -100%</span>',
        'https://agro-market.net/ua/catalog/cat/269/'
    )}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}