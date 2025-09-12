"use strict";
// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
var _a;
if (confirm('Почати тестування?')) {
    const startData = {
        day: 20,
        month: 8,
        year: 1997
    };
    const numberMonths = (_a = Number(prompt('Введіт кількість місяців', '8'))) !== null && _a !== void 0 ? _a : 0;
    /**
     * function counts months
     * @param obj an object in the form of a date
     * @param num takes the number of months
     * @returns the year considering the number of months
     */
    function getCountingMonths(obj, num) {
        const year = Math.floor((obj.month + num) / 12) + obj.year;
        return year;
    }
    // if you need to return the object the same as it arrived
    // /**
    //  * function counts months
    //  * @param obj an object in the form of a date
    //  * @param num takes the number of months
    //  * @returns a complete date including the number of months
    //  */
    // function getCountingMonths(obj:Data, num:number):Data {
    //     const {day} = obj
    //     const month = Math.floor((obj.month + num) % 12)
    //     const year = Math.floor((obj.month + num) / 12) + obj.year
    //     return {day, month, year}
    // }
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Початкова Дата:<br> ${startData.day} / ${startData.month} / ${startData.year}</div>
        <hr>
    `);
    document.write(`Через ${numberMonths} місяців буде - ${getCountingMonths(startData, numberMonths)} рік`);
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
