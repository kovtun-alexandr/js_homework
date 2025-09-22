"use strict";
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
// Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення 
// дати на певну кількість днів, місяців чи років. Введення та виведення дати 
// реалізувати за допомогою методу  toString.
if (confirm('Почати тестування?')) {
    class TData {
        constructor(initialDay, initialMonth, initialYear) {
            this._day = 0;
            this._month = 0;
            this._year = 0;
            this.Day = initialDay;
            this.Month = initialMonth;
            this.Year = initialYear;
        }
        /**
         * get Day
         */
        get Day() {
            return this._day;
        }
        /**
         * set Day
         */
        set Day(v) {
            if (v >= 1 && v <= 31)
                this._day = v;
            else
                throw new Error('Incorrect data entered');
        }
        /**
         * get Month
         */
        get Month() {
            return this._month;
        }
        /**
         * set Month
         */
        set Month(v) {
            if (v >= 1 && v <= 12)
                this._month = v;
            else
                throw new Error('Incorrect data entered');
        }
        /**
         * get Year
         */
        get Year() {
            return this._year;
        }
        /**
         * set Year
         */
        set Year(v) {
            this._year = v;
        }
        /**
         * increase/decrease days
         */
        set AddDay(v) {
            this.Day += v;
            // if the day is full ahead
            if (this.Day > 30) {
                this.Month += Math.floor((this.Day - 1) / 31); // how many months do we add
                this.Day = ((this.Day - 1) % 31) + 1; // the rest is like a new day
            }
            // if the day is full back
            if (this.Day < 1) {
                const monthsBack = Math.ceil(Math.abs(this.Day) / 31);
                this.Month -= monthsBack;
                this.Day = 30 - ((Math.abs(this.Day) - 1) % 31);
            }
            // now we adjust the years
            if (this.Month > 12) {
                this.Year += Math.floor((this.Month - 1) / 12);
                this.Month = ((this.Month - 1) % 12) + 1;
            }
            if (this.Month < 1) {
                const yearsBack = Math.ceil(Math.abs(this.Month) / 12);
                this.Year -= yearsBack;
                this.Month = 12 - ((Math.abs(this.Month) - 1) % 12);
            }
        }
        /**
         * increase/decrease month
         */
        set AddMonth(v) {
            this.Month += v;
            if (this.Month > 12) {
                this.Year += Math.floor((this.Month - 1) / 12);
                this.Month = ((this.Month - 1) % 12) + 1;
            }
            if (this.Month < 1) {
                const yearsBack = Math.ceil(Math.abs(this.Month) / 12);
                this.Year -= yearsBack;
                this.Month = 12 - ((Math.abs(this.Month) - 1) % 12);
            }
        }
        /**
         * increase/decrease years
         */
        set AddYear(v) {
            this.Year += v;
        }
        /**
         * convert date toString
         */
        toString() {
            return `${this.Day}.${this.Month}.${this.Year}`;
        }
    }
    const data = new TData(23, 8, 1984);
    try {
        document.write(`
            <h2 class="homework__title">Рішення:</h2>
            <div>Початкова Дата:<br> ${data.toString()}</div>
            <hr>
        `);
    }
    catch (error) {
        document.write(`
            <h2 class="homework__title">Рішення:</h2>
            <div>${error.message}</div>
            <hr>
        `);
    }
    const addDay = -350;
    data.AddDay = addDay;
    document.write(`<div>Віднімаємо ${addDay} днів <br> Отримуємо дату: ${data.toString()}</div>`);
    const addMouns = 300;
    data.AddMonth = addMouns;
    document.write(`<div>Додаемо ${addMouns} місяців <br> Отримуємо дату: ${data.toString()}</div>`);
    const addYear = -10;
    data.AddYear = addYear;
    document.write(`<div>Віднімаємо ${addYear} років <br> Отримуємо дату: ${data.toString()}</div>`);
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
