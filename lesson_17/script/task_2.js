"use strict";
// Створити службове авто (водій, марка, номер). Створити клас таким чином, 
// щоб можна було створити тільки один екземпляр цього класу.
var _a;
if (confirm('Почати тестування?')) {
    class CompanyCar {
        /**
         * display data on the screen
         * @returns a string
         */
        toString() {
            return `
                <div>Ім"я водія: ${_a.driverName}</div>
                <div>Марка автомобіля: ${_a.brandName}</div>
                <div>Номер автомобіля: ${_a.number}</div>`;
        }
    }
    _a = CompanyCar;
    (() => {
        _a.driverName = 'Oleksandr';
        _a.brandName = 'Mercedes-benz';
        _a.number = 'АХ8106KA';
    })();
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <hr>
    `);
    const carOne = new CompanyCar();
    document.write(`${carOne.toString()}`);
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
