// 1) Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//    чи є у масиві ім’я «Olga» і під яким індексом.
// 2) Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//    чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm('Почати тестування?')) {
    type Names = string[]
    type Mixed = (string | number)[]

    const names: Names = [
        "Oleksandr",
        "Andrii",
        "Mykola",
        "Petro",
        "Volodymyr",
        "Yurii",
        "Taras",
        "Stepan",
        "Vasyl",
        "Olga",
        "Bohdan",
        "Kateryna",
        "Oksana",
        "Tetiana",
        "Natalia",
        "Halyna",
        "Iryna",
        "Larysa",
        "Olena",
        "Mariia",
        "Anastasiia"
    ];

    /**
     * The function sorts an array of names
     * @param arr accepts an array of names
     * @returns an array of sorted names
     */
    const getSortArr = (arr: Names): Names => {
        let indexEnd: number = arr.length

        for (let i = 0; i < indexEnd; i++) {
            for (let j = 0; j < indexEnd - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp: string = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }

        return arr
    }

    // 1)
    /**
     * The function searches for the given name and returns its index
     * @param arr accepts an array of names
     * @param name accepts a search value
     * @returns the index of the specified name if it is present, otherwise returns -1
     */
    const getSearchNameIndex = (names: Names, name: string): number => {
        let nameIndex: number = -1

        for (let i = 0; i < names.length; i++) {
            if (names[i].toLocaleLowerCase() === name.toLocaleLowerCase()) {
                nameIndex = i
                break
            }
        }

        return nameIndex
    }

    // 2)
    /**
     * The function searches for a name by length
     * @param arr accepts an array of names
     * @param num pass the number of characters
     * @returns an array with name and index arrays with the specified length of letters
     */
    const getLookingShorterName = (arr: Names, num: number): Mixed => {
        const newArr: any = []

        for (let i = 0; i < sortNames.length; i++) {
            if (sortNames[i].length === num) {
                const coincidence: Mixed = []
                coincidence[0] = sortNames[i]
                coincidence[1] = i
                newArr.push(coincidence)
            }
        }
        return newArr
    }

    /**
     * Displays the results of a two-dimensional array on the screen.
     * @param str accepts part of the task condition
     * @param arr accepts a two-dimensional array of name and index
     */
    function getPrintMessages(str: string, arr: any) {
        let arrStrPrint: string = ''

        for (let i = 0; i < arr.length; i++) {
            arrStrPrint += '<li>'
            for (let j = 0; j < arr[i].length; j++) {
                if (j !== 1)
                    arrStrPrint += `\"${arr[i][j]}\"`
                else
                    arrStrPrint += ` має індекс - ${arr[i][j]}`
            }
            arrStrPrint += '</li>'
        }

        document.write(`
            <div>${str} знайдено: ${arr.length} імен</div>
            <ul>${arrStrPrint}</ul>
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>В нас є масив імен: </br> \[${names}\]</div>
        <hr>
    `)

    const sortNames: Names = [...getSortArr(names)]

    document.write(`
        <div>Відсортований масив імен: </br> \[${sortNames}\]</div>
    `)

    const searchName: string | null = prompt('Яке імя ви хочете знайти?', 'Olga')
    const taskFirst: string = `1) У масиві ім’я \"${searchName}\"`
    const taskSecond: string = '2) у масиві ім’я довжиною 5 символів'

    if (searchName !== null) {
        const index: number = getSearchNameIndex(sortNames, searchName)
        if (index >= 0) {
            document.write(`
                ${taskFirst} - має індекс ${index}
            `)
        } else {
            document.write(`
                ${taskFirst} - не знайдене
            `)
        }
    } else {
        document.write('1) Ви не вказали імя!')
    }

    getPrintMessages(taskSecond, getLookingShorterName(sortNames, 5))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}