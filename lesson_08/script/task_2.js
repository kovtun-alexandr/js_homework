'use strict'

// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// Номер дня, протягом яких кількість відвідувачів була меншою за 20
// Номер дня, коли кількість відвідувачів була максимальною
// Номер дня, коли кількість відвідувачів була мінімальною
// загальну кількість клієнтів у робочі дні та окремо загальну кількість на вихідних.

if (confirm('Почати тестування?')) {
    function getLessTwentyVisitors(arr) {
        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] < 20) return `У ${i}-й день тижня, відвідувачів було менше ніж 20`
        }

        return 'Жодного дня не було менше ніж 20 відвідувачив'
    }

    function getMinVisitors(arr) {
        let min = arr[0]
        let day = 1

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
                day = i + 1
            }
        }

        return day
    }

    function getMaxVisitors(arr) {
        let max = arr[0]
        let day = 1

        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
                day = i + 1
            }
        }

        return day
    }

    function getWorkersVisitors(arr) {
        let sum = 0

        for (let i = 0; i < 5; i++) {
            sum += arr[i]
        }

        return sum
    }

    function getWeekendVisitors(arr) {
        let sum = 0

        for (let i = 5; i < arr.length; i++) {
            sum += arr[i]
        }

        return sum
    }

    const weekFirstVisitors = [120, 95, 143, 160, 180, 210, 175];
    const weekSecondVisitors = [20, 15, 40, 90, 35, 110, 150];
    const weekThirdVisitors = [30, 60, 150, 18, 80, 50, 145];
    const weekFourthVisitors = [143, 30, 95, 130, 80, 75, 90];

    function getPrintMessages(...parameters) {
        document.write(`
            <ul>
                <li>${parameters[0]}</li>
                <li>У ${parameters[1]}-й день, кількість відвідувачів була максимальною</li>
                <li>У ${parameters[2]}-й день, кількість відвідувачів була мінімальною</li>
                <li>${parameters[3]} клієнтів було у робочі дні</li>
                <li>${parameters[4]} клієнтів було у вихідні дні</li>
            </ul>    
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Перший тиждень ${weekFirstVisitors}</li>
            <li>Другий тиждень ${weekSecondVisitors}</li>
            <li>Третій тиждень ${weekThirdVisitors}</li>
            <li>Четвертий тиждень ${weekFourthVisitors}</li>
        </ul>
        <hr>
    `)

    getPrintMessages(
        getLessTwentyVisitors(weekFirstVisitors),
        getMaxVisitors(weekFirstVisitors),
        getMinVisitors(weekFirstVisitors),
        getWorkersVisitors(weekFirstVisitors),
        getWeekendVisitors(weekFirstVisitors)
    )

    getPrintMessages(
        getLessTwentyVisitors(weekSecondVisitors),
        getMaxVisitors(weekSecondVisitors),
        getMinVisitors(weekSecondVisitors),
        getWorkersVisitors(weekSecondVisitors),
        getWeekendVisitors(weekSecondVisitors)
    )

    getPrintMessages(
        getLessTwentyVisitors(weekThirdVisitors),
        getMaxVisitors(weekThirdVisitors),
        getMinVisitors(weekThirdVisitors),
        getWorkersVisitors(weekThirdVisitors),
        getWeekendVisitors(weekThirdVisitors)
    )

    getPrintMessages(
        getLessTwentyVisitors(weekFourthVisitors),
        getMaxVisitors(weekFourthVisitors),
        getMinVisitors(weekFourthVisitors),
        getWorkersVisitors(weekFourthVisitors),
        getWeekendVisitors(weekFourthVisitors)
    )
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}