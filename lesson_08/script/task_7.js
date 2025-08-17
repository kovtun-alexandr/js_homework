'use strict'

// Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість 
// одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один 
// у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. 
// Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, 
// поки не будуть потоплені усі кораблі.

if (confirm('Почати тестування?')) {

    const numberCells = parseInt(prompt('Введіть кількість клітинок для поля', '10'))

    const getShips = (num) => Math.floor(Math.random() * (num / 2)) + 1

    function getRandomShips(num) {
        const min = 1
        const max = num
        const newArr = []

        for (let i = 0; i < max; i++) {
            const ship = Math.floor(Math.random() * max) + min
            newArr.push(ship)
        }
        newArr.sort((a, b) => a - b)

        return newArr
    }

    function getAddShipsBattleGround(num, arr) {
        const newArr = []
        loop: for (let i = 0; i < num; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === i) {
                    newArr.push('1');
                    continue loop
                }
            }
            newArr.push('0')
        }

        return newArr
    }



    function getFight(arr) {
        let count = 0
        let shotCount = 0

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === '1') count++
        }

        while (count !== 0) {
            alert(`У вас ${count} кораблів`)
            const shot = parseInt(prompt(`Зробіть постріл, максимальна кількість клітин ${arr.length} Кораблів ${count}. Для вихода введіть -1`))
            shotCount++
            for (let i = 0; i < arr.length; i++) {
                if (shot === -1) return arr
                if (shot === i && arr[i] === '1') {
                    arr[i] = 'X'
                    count--
                    alert(`Ви підбили корабель! Лишилось ${count} кораблів`)
                }
                if (shot === i && arr[i] === '0') {
                    arr[i] = '*'
                    alert(`Ви не влучили! Лишилось ${count} кораблів`)
                }
            }
        }
        alert('Вітаю ви перемогли!')

        return [arr, shotCount]
    }

    function getPrintMessages(arr) {
        document.write(`
            <ul>
                <li>Поле бою ${arr[0]}</li>
                <li>Ви зробили пострілів ${arr[1]}</li>
            </ul>    
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Пуста клітинка 0</li>
            <li>Постріл *</li>
            <li>Підбитий корабель Х</li>
        </ul>
        <hr>
    `)

    const battleGround = getAddShipsBattleGround(numberCells, getRandomShips(getShips(numberCells)))

    getPrintMessages(getFight(battleGround))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}