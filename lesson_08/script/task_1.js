'use strict'

// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати 
// до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), 
// хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm('Почати тестування?')) {
    function getAverageScore(arr) {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        sum /= arr.length

        return sum.toFixed(1)
    }

    function getMinimumValue(arr) {
        let minValue = arr[0]

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) minValue = arr[i]
        }

        return minValue
    }

    function getCategoryGrades(num) {
        switch (num) {
            case 12:
            case 11:
            case 10:
                return 'відмінник'
            case 9:
            case 8:
            case 7:
                return 'хорошист'
            case 6:
            case 5:
            case 4:
                return 'трійочник'
            case 3:
            case 2:
            case 1:
                return 'двійочник'
            default:
                break;
        }
    }

    const alex = [7, 10, 8, 6, 11, 9, 10, 5, 4, 8, 7, 9]
    const ivan = [5, 6, 7, 4, 3, 8, 4, 5, 6, 9, 7, 8]
    const maxim = [8, 9, 10, 7, 10, 7, 8, 8, 7, 10, 8, 10]
    const olena = [10, 11, 8, 9, 12, 7, 9, 10, 8, 11, 9, 12]
    const maria = [10, 11, 12, 10, 12, 11, 12, 10, 10, 11, 10, 12]

    function getPrintMessages(...parameters) {
        document.write(`<strong>${parameters[0]}</strong> має середній бал ${parameters[1]} - ${parameters[2]} <br>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Оцінки учня <strong>Alex</strong> ${alex}</li>
            <li>Оцінки учня <strong>Ivan</strong> ${ivan}</li>
            <li>Оцінки учня <strong>Maxim</strong> ${maxim}</li>
            <li>Оцінки учня <strong>Olena</strong> ${olena}</li>
            <li>Оцінки учня <strong>Maria</strong> ${maria}</li>
        </ul>
        <p></p>
        <hr>
    `)

    getPrintMessages('Alex', getAverageScore(alex), getCategoryGrades(getMinimumValue(alex)))
    getPrintMessages('Ivan', getAverageScore(ivan), getCategoryGrades(getMinimumValue(ivan)))
    getPrintMessages('Maxim', getAverageScore(maxim), getCategoryGrades(getMinimumValue(maxim)))
    getPrintMessages('Olena', getAverageScore(olena), getCategoryGrades(getMinimumValue(olena)))
    getPrintMessages('Matia', getAverageScore(maria), getCategoryGrades(getMinimumValue(maria)))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}