'use strict'

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {
    function getSeason(num) {
        let season
        switch (num) {
            case 12:
            case 1:
            case 2:
                season = 'Зима'
                break;
            case 3:
            case 4:
            case 5:
                season = 'Весна'
                break;
            case 6:
            case 7:
            case 8:
                season = 'Літо'
                break;
            case 9:
            case 10:
            case 11:
                season = 'Осінь'
                break;
            default:
                throw new Error("Вибачте. Але такого місяця не існує!");

        }
        return season
    }

    const numberMonth = parseInt(prompt('Введіть номер місяця:', '3'))

    document.write(`Місяць ${numberMonth} це ${getSeason(numberMonth)}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}