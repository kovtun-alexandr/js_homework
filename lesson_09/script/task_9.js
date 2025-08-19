'use strict'

// Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Почати тестування?')) {
    let names = [
        "Андрій",
        "Олександр",
        "Марія",
        "Ірина",
        "Дмитро",
        "Світлана",
        "Володимир",
        "Оксана",
        "Наталія",
        "Сергій",
        "Юлія",
        "Петро",
        "Катерина",
        "Михайло",
        "Олена",
        "Ігор",
        "Вікторія",
        "Тарас",
        "Анна",
        "Богдан"
    ];

    function getCollectFirstLetters(arr) {
        const firstLetters = arr.map((name) => name.charAt(0))

        return firstLetters
    }

    function getPrintMessages(arr) {
        document.write(`<di>Масив з перших літер даних імен: \[${arr}\]</di>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li style="width:100%;overflow-x:scroll;">Масив імен \[${names}\]</li>
        </ul>
        <hr>
    `)

    getPrintMessages(getCollectFirstLetters(names))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}