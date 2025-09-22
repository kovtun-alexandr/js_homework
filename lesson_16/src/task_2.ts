// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, 
// та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі

if (confirm('Почати тестування?')) {
    class TMoney {
        private _money:number = 0
        private _currency:number = 0
        constructor(initialMoney:number, initialCurrency:number) {
            this.Currency = initialCurrency
            this.Money = initialMoney
        }

        /**
         * get Money
         */
        public get Money():number {
            return this._money 
        }

        /**
         * set Money
         */
        public set Money(v:number) {
            this._money += v / this.Currency
        }

        /**
         * get Currency
         */
        public get Currency():number {
            return this._currency
        }

        /**
         * set Currency
         */
        public set Currency(v:number) {
            this._currency = v
        }

        /**
         * AddMoney
         */
        public AddMoney():number {
            return this.Money = 100
        }

        public excludeMoney():number {
            if (this.Money < (100 / this.Currency)) throw new Error('Not enough money!');
            
            return this.Money = -100
        }

        public toString() {
            return `У вас на рахунку: $${this.Money.toFixed(2)}`
        }
    }

    const currency = 41.23
    const initialMoney = 1000
    const money = new TMoney(initialMoney,currency)

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Початкова сума : ${initialMoney} грн. <br>Курс ${currency} грн - 1 $</div>
        <hr>
    `)

    document.write(`<div>${money.toString()}</div>`)
    document.write(`<div>Додали: ${money.AddMoney()} грн</div>`)
    document.write(`<div>${money.toString()}</div>`)

    try {
        for (let i = 0; i < 11; i++) {
            document.write(`<div>Відняли: ${money.excludeMoney()} грн</div>`)
            document.write(`<div>${money.toString()}</div>`)          
        }
    } catch (error:any) {
        document.write(`${error.message}`)
    }
    
    document.write(`<div>${money.toString()}</div>`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}