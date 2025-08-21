'use strict'

// Дано послідовність оцінок учня. Підрахувати кількість:
// двійок
// кількість хороших оцінок (добре, відмінно)
// кількість оцінок, які нижче середнього

if (confirm('Почати тестування?')) {
    const getRandomNum = (min, max) => min + Math.floor(Math.random() * max);

    function getRandomGrades(num) {
        const newArr = []

        for (let i = 0; i < num; i++) {
            newArr.push(getRandomNum(1, 12))
        }

        return newArr
    }

    const sudentGrades = getRandomGrades(15)

    function getGoodGrades(gredesArr) {
        let goodCount = 0

        for (let i = 0; i < gredesArr.length; i++) {
            if (gredesArr[i] > 6) goodCount++
        }

        return goodCount
    }

    function getLessAverageGrades(gredesArr) {
        let lessAverageCount = 0

        for (let i = 0; i < gredesArr.length; i++) {
            if (gredesArr[i] < 6) lessAverageCount++
        }

        return lessAverageCount
    }

    function getDeuceGrades(gredesArr) {
        let deuceCount = 0

        for (let i = 0; i < gredesArr.length; i++) {
            if (gredesArr[i] < 4) deuceCount++
        }

        return deuceCount
    }

    function getSortingGrades(gredesArr) {
        const good = getGoodGrades(gredesArr)
        const lessAverage = getLessAverageGrades(gredesArr)
        const duece = getDeuceGrades(gredesArr)

        return [good, lessAverage, duece]
    }

    function getPrintMessages(sortGredesArr) {
        document.write(`
            <ul>
                <li>двійок - ${sortGredesArr[2]}</li>
                <li>хороших оцінок - ${sortGredesArr[0]}</li>
                <li>нижче середнього - ${sortGredesArr[1]}</li>
            </ul>    
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Оцінки учня - ${sudentGrades}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getSortingGrades(sudentGrades))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}