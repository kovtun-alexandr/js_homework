// Розробити клас «Керівник танців»
// Поля     Масив імен хлопців
//          Масив імен дівчат
// Методи   Метод випадкового вибору імені хлопця
//          Метод випадкового вибору імені дівчини
//          Метод виведення пари для танців
//          Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

if (confirm('Почати тестування?')) {
    type Strings = string[]

    const nameBoys = ["Andrii", "Bohdan", "Dmytro", "Oleksii", "Serhii"]
    const nameGirls = ["Anna", "Iryna", "Kateryna", "Olena", "Sofiia"]

    class DanceDirector {
        nameBoys:Strings
        nameGirls:Strings

        constructor(initNameBoys:Strings, initNameGirls:Strings) {
            this.nameBoys = initNameBoys
            this.nameGirls = initNameGirls
        }

        /**
         * the function generates a random number from minimum to maximum value
         * @param min minimum value
         * @param max maximum value
         * @returns a random generated number
         */
        randomNum = (min:number, max:number):number => Math.floor(Math.random() * (max - min)) + min

        /**
         * the function takes a random name from an array
         * @returns a random name from an array
         */
        randomBoys = () => this.nameBoys[this.randomNum(0, this.nameBoys.length)]

        /**
         * the function takes a random name from an array
         * @returns a random name from an array
         */
        randomBoysGirls = () => this.nameGirls[this.randomNum(0, this.nameGirls.length)]

        /**
         * function creates a pair of names
         * @returns a pair of names
         */
        getDancePair = () => [this.randomBoys(), this.randomBoysGirls()]

        /**
         * calls a function that generates a pair, the interval calls a function every five seconds that generates a pair for us
         */
        run = () => {
            console.log(this.getDancePair())
            setInterval(() => {
                console.log(this.getDancePair())
            }, 5000)
        }
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Відповідь можна побачити у консолі!</div>
        <hr>
        
    `)

    const danceDirector = new DanceDirector(nameBoys, nameGirls)

    danceDirector.run()
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}