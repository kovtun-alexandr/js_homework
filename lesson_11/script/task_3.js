'use strict'

// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
// Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі 
// або у користувача не закінчаться снаряди.

if (confirm('Почати тестування?')) {
    // !!! Нажаль функція getFight() виконана за допомогою ШІ в обох випадках
    const countCell = 6
    const numberShips = 5

    const getRandomShip = (cellElement, min, max) => Array.from(
        { length: cellElement },
        () => min + Math.floor(Math.random() * (max - min + 1))
    )

    const getGeneratedShips = (shipCount, cellCount, min, max) => Array.from(
        { length: shipCount },
        () => getRandomShip(cellCount, min, max)
    )

    const generateShips = getGeneratedShips(numberShips, 2, 0, numberShips)

    function getFight(ships, cell) {
        let copySHips = JSON.parse(JSON.stringify(ships))
        let countShots = parseInt(prompt('Слільки вам потрібно снарядів?', '10'))
        let count = 0
        let recordShots = []

        while (copySHips.length > 0 && countShots > 0) {
            alert(`У вас ${copySHips.length} кораблів, на їх знищення у вас є ${countShots} снарядів`)
            let userShot = prompt(`у вас поле ${cell}x${cell} клітин. Зробіть постріл [x,y] від 0 до 5. Кораблів ${copySHips.length}. (Для вихода введіть -1)`)
            if (userShot.trim() === '-1' || userShot === null) break
            const userShotArr = userShot.split(",").map(Number)
            const searchShips = copySHips.some((ship) =>
                ship.length === userShotArr.length && ship.every((cellElement, cellIndex) => cellElement === userShotArr[cellIndex]))
            if (searchShips) {
                copySHips = copySHips.filter((ship) =>
                    !(ship.length === userShotArr.length && ship.every((cellElement, cellIndex) => cellElement === userShotArr[cellIndex])))
                countShots--
                count++
                alert(`Вітаю! Ви потопили корабель! Кораблів лиштлось ${copySHips.length}. Снарядів у вас лишилось ${countShots}`)
            } else {
                countShots--
                count++
                alert(`Нажаль ви не влучили. Кораблів лиштлось ${copySHips.length}. Снарядів у вас лишилось ${countShots}`)
            }
            recordShots.push(userShotArr)
        }

        let shipStr = ''
        copySHips.length > 0 ? shipStr = `Кораблів лишилось ${copySHips.length} - ${getPrintArray(copySHips)}]`
            : shipStr = 'Кораблів не лишилось'

        return [shipStr, count, recordShots]
    }

    function getPrintArray(arr) {
        let str = '\['

        for (const element of arr) {
            str += `\[${element}\],`
        }
        str += '\]'

        return str
    }

    function getPrintMessages(arr) {
        document.write(`
            <div>${arr[0]}</div>
            <div>Ви зробили пострілів ${arr[1]}</div>
            <div>Ваші постріли ${Array.isArray(arr[2]) ? getPrintArray(arr[2]) : arr[2]}</div>
        `)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Масив кораблів - ${getPrintArray(generateShips)}</div>
        <hr>
    `)

    getPrintMessages(getFight(generateShips, countCell))

    // Це минулий мокский бій удосконалений
    // const countCell = 6
    // const getCreateBattlefield = (num) => Array.from({ length: num }, () => Array(num).fill('0'))
    // const battlefield = getCreateBattlefield(countCell)
    // const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min

    // function getRandomShips(num) {
    //     const ships = []

    //     for (let indexShip = 0; indexShip < num; indexShip++) {
    //         let ship = []
    //         for (let cellShip = 0; cellShip < 2; cellShip++) {
    //             ship[cellShip] = getRandomNum(0, countCell)
    //         }
    //         ships[indexShip] = ship
    //     }

    //     return ships
    // }

    // const getShipsSort = (ships) => ships.filter((ship) => ship.sort((a, b) => a - b))

    // function getShips(ships) {
    //     const randomShips = getRandomShips(ships)
    //     const shipsSort = getShipsSort(randomShips)

    //     return shipsSort
    // }

    // function getAddShipsBattleGround(battleField, ships) {
    //     for (let x = 0; x < battleField.length; x++) {
    //         for (let y = 0; y < battleField[x].length; y++) {
    //             for (let ship = 0; ship < ships.length; ship++) {
    //                 if (ships[ship][0] === x && ships[ship][1] === y)
    //                     battleField[x][y] = '1';
    //             }
    //         }
    //     }

    //     return battleField
    // }

    // function getFight(battleField, ships) {
    //     let countShips = ships.length
    //     let countShots = parseInt(prompt('Слільки вам потрібно снарядів?', '10'))
    //     let count = 0

    //     while (countShips !== 0 && countShots !== 0) {
    //         alert(`У вас ${countShips} кораблів, на їх знищення увас є ${countShots} снарядів`)
    //         let shot = prompt(`Зробіть постріл [x,y], у вас поле ${countCell}x${countCell} клітин. Кораблів ${countShips}. (Для вихода введіть -1)`)
    //         if (shot.trim() === '-1' || shot === null) break
    //         const [shotX, shotY] = shot.split(",").map((n) => Number(n))
    //         if (battleField[shotX][shotY] === '1') {
    //             battleField[shotX][shotY] = 'X'
    //             countShips--
    //             countShots--
    //             count++
    //             alert(`Ви потопили корабель! Лишилось ${countShips} кораблів. У вас лишилось ${countShots} снарядів`)
    //         }
    //         else {
    //             battleField[shotX][shotY] = '*'
    //             countShots--
    //             count++
    //             alert(`Ви не влучили! Лишилось ${countShips} кораблів. У вас лишилось ${countShots} снарядів`)
    //         }
    //     }

    //     return [battleField, count]
    // }

    // function getPrintMessages(arr) {
    //     let str = '[</br>'

    //     for (let i = 0; i < arr[0].length; i++) {
    //         str += `${arr[0][i]}</br>`
    //     }

    //     str += ']'

    //     document.write(`
    //         <div>Поле бою ${str}</div>
    //         <div>Ви зробили пострілів ${arr[1]}</div>
    //     `)
    // }

    // document.write(`
    //     <h2 class="homework__title">Рішення:</h2>
    //     <ul>
    //     <li>Пуста клітинка 0</li>
    //     <li>Постріл *</li>
    //     <li>Підбитий корабель Х</li>
    //     </ul>
    //     <hr>
    // `)

    // const numberShips = 5
    // const ships = getShips(numberShips)
    // const battleGround = getAddShipsBattleGround(battlefield, ships)
    // getPrintMessages(getFight(battleGround, ships))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}