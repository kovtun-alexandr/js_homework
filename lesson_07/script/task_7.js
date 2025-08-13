'use strict'

// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
// (шляхи до зображень передаються у функцію).

if (confirm('Почати тестування?')) {
    function getRandomImage(img1, img2, img3, img4) {
        const min = 1
        const max = 4
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        let src

        console.log(randomNum)
        switch (randomNum) {
            case 1:
                src = img1
                break;
            case 2:
                src = img2
                break;
            case 3:
                src = img3
                break;
            case 4:
                src = img4
                break;
            default:
                throw new Error("Помилка, такого зображення не знайдено");
        }

        return `<img width="1000px" src="${src}" alt="Image">`
    }

    document.write(`${getRandomImage(
        './image/beach.jpg',
        './image/bridge.jpg',
        './image/desert.jpg',
        './image/lake.jpg'
    )}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}