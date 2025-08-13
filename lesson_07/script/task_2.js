'use strict'

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {
    const remainderDivision = num => num % 7

    function getDayWeek(num) {
        let day
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                day = 'Робочий день'
                break;
            case 6:
            case 7:
                day = 'Вихідний день'
                break;
            default:
                throw new Error('Такого дня не існує!');
        }
        return day

        // Або
        // if (num > 0 && num <= 5) return day = 'Робочий день'
        // else if (num <= 7) return day = 'Вихідний день'
        // else return day = 'Такого дня не існує!'
    }

    const numberDay = parseInt(prompt('Введіть номер дня:', '5'))

    if (numberDay > 7 && numberDay <= 31)
        document.write(`День ${numberDay} - ${getDayWeek(remainderDivision(numberDay))}`)
    else
        document.write(`День ${numberDay} - ${getDayWeek(numberDay)}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}