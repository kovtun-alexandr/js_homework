// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
// Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення 
// дати на певну кількість днів, місяців чи років. Введення та виведення дати 
// реалізувати за допомогою методу  toString.

if (confirm('Почати тестування?')) {
    class TData {
        private _day:number = 0
        private _month:number = 0
        private _year:number = 0
        constructor(initialDay:number, initialMonth:number, initialYear:number) {
            this.Day = initialDay
            this.Month = initialMonth
            this.Year = initialYear
        }

        /**
         * get Day
         */
        public get Day():number {
            return this._day
        }

        /**
         * set Day
         */
        public set Day(v:number) {
            this._day = v
        }

        /**
         * get Month
         */
        public get Month():number {
            return this._month
        }

        /**
         * set Month
         */
        public set Month(v:number) {
            this._month = v
        }

        /**
         * get Year
         */
        public get Year():number {
            return this._year
        }

        /**
         * set Year
         */
        public set Year(v:number) {
            this._year = v
        }

        /**
         * increase/decrease days
         */
        public set AddDay(v:number) {
            this.Day += v

            // if the day is full ahead
            if (this.Day > 30) {
                this.Month += Math.floor((this.Day - 1) / 31)   // how many months do we add
                this.Day = ((this.Day - 1) % 31) + 1           // the rest is like a new day
            }

            // if the day is full back
            if (this.Day < 1) {
                const monthsBack = Math.ceil(Math.abs(this.Day) / 31)
                this.Month -= monthsBack
                this.Day = 30 - ((Math.abs(this.Day) - 1) % 31)
            }

            // now we adjust the years
            if (this.Month > 12) {
                this.Year += Math.floor((this.Month - 1) / 12)
                this.Month = ((this.Month - 1) % 12) + 1
            }
            if (this.Month < 1) {
                const yearsBack = Math.ceil(Math.abs(this.Month) / 12)
                this.Year -= yearsBack
                this.Month = 12 - ((Math.abs(this.Month) - 1) % 12)
            }
        }

        /**
         * increase/decrease month
         */
        public set AddMonth(v:number) {
            this.Month += v

            if (this.Month > 12) {
                this.Year += Math.floor((this.Month - 1) / 12)
                this.Month = ((this.Month - 1) % 12) + 1
            }
            if (this.Month < 1) {
                const yearsBack = Math.ceil(Math.abs(this.Month) / 12)
                this.Year -= yearsBack
                this.Month = 12 - ((Math.abs(this.Month) - 1) % 12)
            }
        }

        /**
         * increase/decrease years
         */
        public set AddYear(v:number) {
            this.Year += v
        }

        /**
         * convert date toString
         */
        public toString() {
            return `${this.Day}.${this.Month}.${this.Year}`
        }

    }

    const data = new TData(23,8,1984)

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Початкова Дата:<br> ${data.toString()}</div>
        <hr>
    `)

    const addDay = -350
    data.AddDay = addDay

    document.write(`<div>Віднімаємо ${addDay} днів <br> Отримуємо дату: ${data.toString()}</div>`)

    const addMouns = 300
    data.AddMonth = addMouns
    
    document.write(`<div>Додаемо ${addMouns} місяців <br> Отримуємо дату: ${data.toString()}</div>`)

    const addYear = -10
    data.AddYear = addYear

    document.write(`<div>Віднімаємо ${addYear} років <br> Отримуємо дату: ${data.toString()}</div>`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}
