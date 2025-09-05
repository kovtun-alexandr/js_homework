// Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

if (confirm('Почати тестування?')) {
    type Numbers = number[]
    type Strings = string[]
    type Matrix = Days[][]
    type Days = 1 | 2 | 3 | 4 | 5 | 6 | 7

    /**
     * the function generates a random number from minimum to maximum value
     * @param min minimum value
     * @param max maximum value
     * @returns a random generated number
     */
    const num = (min: number, max: number): number => min + Math.floor(Math.random() * (max - min + 1))

    /**
     * The function generates a two-dimensional array with randomly filled elements
     * @param rows parameter takes the number of rows in the array.
     * @param elements parameters takes the number of elements in the row
     * @param days takes the maximum value
     * @returns a generated two-dimensional array with randomly filled elements
     */
    const getMatrixRandomDays = (rows: number, elements: number, days: number): Matrix => {
        const matrixArr: Matrix = []
        const min: number = 1
        const max: number = days

        for (let i = 0; i < rows; i++) {
            let rowElement: Days[] = [];
            for (let j = 0; j < elements; j++) {
                rowElement.push(num(min, max) as Days)
            }
            matrixArr.push(rowElement)
        }

        return matrixArr
    }

    /**
     * The function searches for the number of matches in a row.
     * @param weeks parameter accepts a two-dimensional array
     * @param day parameter accepts a search item
     * @returns an array with the number of matches in each row
     */
    const getSearchWeekDays = (weeks: Matrix, day: Days): Numbers => {
        const searchDays: Numbers = []

        for (let i = 0; i < weeks.length; i++) {
            let dayCount: number = 0
            for (let j = 0; j < weeks[i].length; j++) {
                if (weeks[i][j] === day) {
                    dayCount++
                }
            }
            searchDays.push(dayCount)
            dayCount = 0
        }

        return searchDays
    }

    /**
     * The function converts a two-dimensional array to a string
     * @param arr accepts a two-dimensional array
     * @returns a string built from an array
     */
    const printMatrix = (arr: Matrix): string => {
        let printMatrix: string = '\[</br>'

        for (const element of arr) {
            printMatrix += `&nbsp;&nbsp;&nbsp;&nbsp;\[${element}\],</br>`
        }
        printMatrix += '\]</br>'

        return printMatrix
    }

    /**
     * The function displays the results on the screen.
     * @param arr parameter accepts an array with results
     * @param day parameter accepts the name of the day
     */
    const printWeekDays = (arr: Numbers, day: string) => {
        document.write(`<div>День який ви вибрали \"${day}\":</div>`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`
                <div>У рядку №${i + 1} знайдено - ${arr[i]} разів </div>
            `)
        }
    }

    const weekDays: Strings = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const matrixWeekDays = getMatrixRandomDays(4, 8, weekDays.length)
    const numberDay: number = Number(prompt('Введіть номер дня від 1 до 7', '1'))

    /**
     * The function searches for the day's date by index
     * @param days accepts an array of day names
     * @param numDay accepts day number
     * @returns a string with the name of the day
     */
    const searchDay = (days: Strings, numDay: number): string => {
        let day: string = ''

        for (let i = 0; i < days.length; i++) {
            if (i + 1 === numDay)
                day = days[i];
        }

        return day
    }

    const dayName = searchDay(weekDays, numberDay)

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Згенерований двовимірний масив (4*8) з номерами днів: </br> ${printMatrix(matrixWeekDays)}</div>
        <hr>
    `)

    if (numberDay >= 1 && numberDay <= 7)
        printWeekDays(getSearchWeekDays(matrixWeekDays, numberDay as Days), dayName)
    else
        alert('Ви ввели не допустиме число')

} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}