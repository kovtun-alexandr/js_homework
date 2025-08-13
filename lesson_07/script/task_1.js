'use strict'

if (confirm('Почати тестування?')) {
    function getNameMonth(num) {
        let month
        switch (num) {
            case 1:
                month = 'Січень'
                break;
            case 2:
                month = 'Лютий'
                break;
            case 3:
                month = 'Березень'
                break;
            case 4:
                month = 'Квітень'
                break;
            case 5:
                month = 'Травень'
                break;
            case 6:
                month = 'Червень'
                break;
            case 7:
                month = 'Липень'
                break;
            case 8:
                month = 'Серпень'
                break;
            case 9:
                month = 'Вересень'
                break;
            case 10:
                month = 'Жовтень'
                break;
            case 11:
                month = 'Листопад'
                break;
            case 12:
                month = 'Грудень'
                break;
            default:
                throw new Error("Такого місяця не існує!");

        }
        return month
    }

    const numberMonth = parseInt(prompt('Введіть номер місяця:', '3'))

    document.write(`Місяць №${numberMonth} має назву : ${getNameMonth(numberMonth)}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}