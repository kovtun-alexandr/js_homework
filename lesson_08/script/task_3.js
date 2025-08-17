'use strict'

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {
    function getNameSearch(name, arr) {
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === name) count++
        }

        return count
    }

    const listStudents = [
        'Іван',
        'Андрій',
        'Олександр',
        'Марія',
        'Іван',
        'Наталля',
        'Олег',
        'Андрій',
        'Олена',
        'Іван',
        'Олексій',
        'Микола',
        'Тетяна',
        'Інна',
        'Сергій',
        'Іван',
        'Дмитро',
        'Олександр',
        'Денис',
        'Діана',
        'Іван'
    ]

    function getMessagePrint(...parameters) {
        document.write(`У данному списку ім'я <strong>${parameters[0]}</strong> зустрічається ${parameters[1]} раз <br>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <p>Список учнів: ${listStudents}</p>
        <hr>
    `)

    getMessagePrint('Іван', getNameSearch('Іван', listStudents))
    getMessagePrint('Інна', getNameSearch('Інна', listStudents))
    getMessagePrint('Олександр', getNameSearch('Олександр', listStudents))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}