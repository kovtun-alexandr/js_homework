// Створити службове авто (водій, марка, номер). Створити клас таким чином, 
// щоб можна було створити тільки один екземпляр цього класу.

if (confirm('Почати тестування?')) {
    class CompanyCar {
        static driverName:string
        static brandName:string
        static number:string

        static {
            this.driverName = 'Oleksandr'            
            this.brandName = 'Mercedes-benz'
            this.number = 'АХ8106KA'
        }

        /**
         * display data on the screen
         * @returns a string
         */
        public toString() {
            return `
                <div>Ім"я водія: ${CompanyCar.driverName}</div>
                <div>Марка автомобіля: ${CompanyCar.brandName}</div>
                <div>Номер автомобіля: ${CompanyCar.number}</div>`
        }
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <hr>
    `)

    const carOne = new CompanyCar()
    document.write(`${carOne.toString()}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}