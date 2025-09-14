"use strict";
// Розробити клас Baner
// Поля     Масив об’єктів ( графічних зображень та посилань на сайти)
// Методи   Метод випадкового вибору об’єкта (графічного зображення та посилання)
//          Метод виведення випадкового банера
if (confirm('Почати тестування?')) {
    const banners = [
        {
            image: './image/banner_1.jpg',
            link: 'https://kitdarue.com/'
        },
        {
            image: './image/banner_2.jpg',
            link: 'https://rozetka.com.ua/ua/promo/falldiscounts/'
        },
        {
            image: './image/banner_3.gif',
            link: 'https://comfy.ua/ua/landing/kids.html'
        },
        {
            image: './image/banner_4.jpg',
            link: 'https://www.youtube.com/watch?v=m4TmNeJmh20'
        },
        {
            image: './image/banner_5.webp',
            link: 'https://knigoland.com.ua/monthly-sale-promotions'
        },
    ];
    class RenderBanner {
        constructor(arr) {
            /**
             * the function generates a random number from minimum to maximum value
             * @param min minimum value
             * @param max maximum value
             * @returns a random generated number
             */
            this.randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
            /**
             * the function takes a random object from an array
             * @returns a random object from an array
             */
            this.randomBanner = () => banners[this.randomNum(0, banners.length)];
            this.banners = arr;
        }
        /**
         * The function displays a banner on the screen.
         */
        render() {
            const banner = this.randomBanner();
            document.write(`
                <div style="width: 100%;">
                    <a target="_blank" href="${banner.link}">
                        <img src="${banner.image}" alt="image">
                    </a>
                </div>
                
            `);
        }
    }
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <hr>
    `);
    const renderBanner = new RenderBanner(banners);
    renderBanner.render();
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
