// Створити службове авто (водій, марка, номер). Створити клас таким чином, 
// щоб можна було створити тільки один екземпляр цього класу.

if (confirm('Почати тестування?')) {
    class CompanyCar {
        driverName:string = ''
        brandName:string = ''
        number:string = ''
        static objCompanyCar: CompanyCar

        constructor(name: string, carBrand: string, carNumber: string) {
            if(CompanyCar.objCompanyCar) return CompanyCar.objCompanyCar
            this.driverName =  name          
            this.brandName = carBrand
            this.number = carNumber
            CompanyCar.objCompanyCar = this
        }

        /**
         * display data on the screen
         * @returns a string
         */
        public toString() {
            return `
                <div>Ім"я водія: ${this.driverName}</div>
                <div>Марка автомобіля: ${this.brandName}</div>
                <div>Номер автомобіля: ${this.number}</div>`
        }
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <hr>
    `)

    const carOne = new CompanyCar('Oleksandr', 'Mercedes-benz', 'АХ8106KA')
    document.write(`${carOne.toString()}`)
    const carTwo = new CompanyCar('Pavel', 'Mazda', 'АХ4305ХК')
    document.write(`${carTwo.toString()}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}