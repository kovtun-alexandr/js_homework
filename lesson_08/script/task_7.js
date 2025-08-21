'use strict'

// Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість 
// одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один 
// у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. 
// Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, 
// поки не будуть потоплені усі кораблі.

if (confirm('Почати тестування?')) {
    function getCreateBattlefield() {
        const numberCells = parseInt(prompt('Введіть кількість клітинок для поля', '10'))
        const battlefieldArr = []

        for (let i = 0; i < numberCells; i++) {
            battlefieldArr.push('0')
        }

        return battlefieldArr
    }

    const battlefield = getCreateBattlefield()
    const getShipsNumber = (arr) => Math.floor(Math.random() * (arr.length / 2)) + 1

    function getRandomShips(num) {
        const min = 1
        const max = num
        const shipsArr = []

        for (let i = 0; i < max; i++) {
            const ship = Math.floor(Math.random() * max) + min
            shipsArr.push(ship)
        }

        return shipsArr
    }

    function getShipsSort(shipsArr) {
        shipsArr.sort((a, b) => a - b)

        return shipsArr
    }

    function getUniqueShips(shipsArr) {
        const uniqueShipsArr = shipsArr.filter((ship, index, baseArr) => baseArr.indexOf(ship) === index)

        return uniqueShipsArr
    }

    function getShips(num) {
        const randomShips = getRandomShips(num)
        const shipsSort = getShipsSort(randomShips)
        const uniqueShips = getUniqueShips(shipsSort)

        return uniqueShips
    }

    function getAddShipsBattleGround(battlefieldArr, shipsArr) {
        loop: for (let i = 0; i < battlefieldArr.length; i++) {
            for (let j = 0; j < shipsArr.length; j++) {
                if (shipsArr[j] === i) {
                    battlefieldArr[i] = '1';
                    continue loop
                }
            }
        }

        return battlefieldArr
    }

    function getFight(battleArr, shipsArr) {
        let count = shipsArr.length
        let shotCount = 0

        while (count !== 0) {
            alert(`У вас ${count} кораблів`)
            const shot = parseInt(prompt(`Зробіть постріл, максимальна кількість клітин ${battleArr.length} Кораблів ${count}. Для вихода введіть -1`))
            shotCount++
            for (let i = 0; i < battleArr.length; i++) {
                if (shot === -1) return arr
                if (shot === i && battleArr[i] === '1') {
                    battleArr[i] = 'X'
                    count--
                    alert(`Ви підбили корабель! Лишилось ${count} кораблів`)
                }
                if (shot === i && battleArr[i] === '0') {
                    battleArr[i] = '*'
                    alert(`Ви не влучили! Лишилось ${count} кораблів`)
                }
            }
        }
        alert('Вітаю ви перемогли!')

        return [battleArr, shotCount]
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

    const ships = getShips(getShipsNumber(battlefield))
    const battleGround = getAddShipsBattleGround(battlefield, ships)

    getPrintMessages(getFight(battleGround, ships))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}