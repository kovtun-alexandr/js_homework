// Створити клас, що дозволяє виконувати такі операції над масивами: 
// знаходження кількості додатних, кількості від’ємних, 
// кількість входжень деякого числа (статичні методи)

if (confirm('Почати тестування?')) {
    class NumbersWorking {
        static countPositive:number = 0
        static countNegative:number = 0
        static countMatches:number = 0
        static numbers:number[] = []
        static searchNum:number | null = null
        constructor(arr:number[]) {
            NumbersWorking.numbers = [...arr]
        }

        /**
         * add a number to the end of the array if we need it
         * @param num pass a number
         */
        static add(num:number | number[]){
            if (Array.isArray(num)) {
                return this.numbers.push(...num)
            } else {
                return this.numbers.push(num)
            }
        }

        /**
         * finding the number of positive elements in an array
         */
        static searchPositive() {
            return this.numbers.forEach((el) => {
                if(el > 0) NumbersWorking.countPositive++
            })
        }

        /**
         * finding the number of negative elements in an array
         */
        static searchNegatives() {
            return this.numbers.forEach((el) => {
                if(el < 0) NumbersWorking.countNegative++
            })
        }

        /**
         * looking for the number of occurrences of the specified number
         */
        static searchNumber(num:number) {
            this.searchNum = num
            this.numbers.forEach((el) => {
                if(el === num) NumbersWorking.countMatches++
            })
        }

        /**
         * display data on the screen
         * @returns a string
         */
        public toString() {
            return `
                <div>Масив: [${NumbersWorking.numbers}]</div>
                <div>Довжина масива ${NumbersWorking.numbers.length}</div> 
                <div>Кількості від’ємних - ${NumbersWorking.countNegative}</div> 
                <div>Кількості додатних - ${NumbersWorking.countPositive}</div>
                <div>Кількість входжень числа ${NumbersWorking.searchNum} - ${NumbersWorking.countMatches}</div>
            `
        }
        
    }

    const numbers = [
        -5, 3, 12, -7, 8, 3, -15, 22, -1, 7,
        12, -8, 19, 0, -3, 25, -10, 7, -2, 18,
        -20, 5, -7, 30, 8, -12, 14, -4, 22, -15,
        19, 0, -6, 25, -9, 5, -13, 11, -17, 30,
        3, -2, 14, -8, 18, -1, 7, -4, 22, -10
    ]

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Початковий масив:<br> [${numbers}]</div>
        <div>Довжина масива ${numbers.length}</div>
        <hr>
    `)

    const numbersWorking = new NumbersWorking(numbers)
    NumbersWorking.add(-5)
    NumbersWorking.add([35, -10, 12, 0, 15])
    NumbersWorking.searchNegatives()
    NumbersWorking.searchPositive()
    NumbersWorking.searchNumber(0)

    document.write(`${numbersWorking.toString()}`)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}
