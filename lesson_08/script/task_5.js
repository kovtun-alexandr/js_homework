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

    function getSortingGrades(arr) {
        let goodCount = 0
        let belowAverageCount = 0
        let deuceCount = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 6) continue
            if (arr[i] > 6) goodCount++
            else if (arr[i] > 3) belowAverageCount++
            else deuceCount++
        }

        return [goodCount, belowAverageCount, deuceCount]
    }

    function getPrintMessages(arr) {
        document.write(`
            <ul>
                <li>двійок - ${arr[2]}</li>
                <li>хороших оцінок - ${arr[0]}</li>
                <li>нижче середнього - ${arr[1]}</li>
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