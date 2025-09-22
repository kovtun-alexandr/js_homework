"use strict";
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, 
// та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі
if (confirm('Почати тестування?')) {
    class TMoney {
        constructor(initialMoney, initialCurrency) {
            this._money = 0;
            this._currency = 0;
            this.Currency = initialCurrency;
            this.Money = initialMoney;
        }
        /**
         * get Money
         */
        get Money() {
            return this._money;
        }
        /**
         * set Money
         */
        set Money(v) {
            this._money += v / this.Currency;
        }
        /**
         * get Currency
         */
        get Currency() {
            return this._currency;
        }
        /**
         * set Currency
         */
        set Currency(v) {
            this._currency = v;
        }
        /**
         * AddMoney
         */
        AddMoney() {
            return this.Money = 100;
        }
        excludeMoney() {
            if (this.Money < (100 / this.Currency))
                throw new Error('Not enough money!');
            return this.Money = -100;
        }
        toString() {
            return `У вас на рахунку: $${this.Money.toFixed(2)}`;
        }
    }
    const currency = 41.23;
    const initialMoney = 1000;
    const money = new TMoney(initialMoney, currency);
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Початкова сума : ${initialMoney} грн. <br>Курс ${currency} грн - 1 $</div>
        <hr>
    `);
    document.write(`<div>${money.toString()}</div>`);
    document.write(`<div>Додали: ${money.AddMoney()} грн</div>`);
    document.write(`<div>${money.toString()}</div>`);
    try {
        for (let i = 0; i < 11; i++) {
            document.write(`<div>Відняли: ${money.excludeMoney()} грн</div>`);
            document.write(`<div>${money.toString()}</div>`);
        }
    }
    catch (error) {
        document.write(`${error.message}`);
    }
    document.write(`<div>${money.toString()}</div>`);
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
