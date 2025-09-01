'use strict'

// Дано інформацію про прибуток К магазинів протягом тижня.
// 1) Загальний прибуток кожного магазину за тиждень
// 2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, 
//    За вівторок, і т.д.
// 3) Загальний прибуток за робочі дні
// 4) Загальний прибуток за вихідні дні
// 5) Максимальний прибуток за середу
// 6) Сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) Відсортувати кожен тиждень за зростанням
// 8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), 
//    тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку 
//    (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і 
//    порівнювати ці суми, на основі цих сум буде зрозуміло, 
//    який з елементів повинен іти раніше)

if (confirm('Почати тестування?')) {
    const shopNumber = 10

    const getRandomStore = (dayElement, min, max) => Array.from(
        { length: dayElement },
        () => min + Math.floor(Math.random() * (max - min + 1))
    )

    const getRandomShops = (shopCount, dayCount, min, max) => Array.from(
        { length: shopCount },
        () => getRandomStore(dayCount, min, max)
    )

    const profitShops = getRandomShops(shopNumber, 7, 100, 600)
    const getSortMinMax = (arr) => arr.sort((a, b) => a - b)
    const getSortMaxMin = (arr) => arr.sort((a, b) => b - a)

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Дано інформацію про прибуток ${shopNumber} магазинів протягом тижня: \[${getPrintStors(profitShops)}\]</li>
        </ul>
        <hr>
    `)

    // 1)
    function getIndividualStoreAmount(stores) {
        // const amountStors = []
        // let storeAmount = 0

        // for (const store of stores) {
        //     for (const element of store) {
        //         storeAmount += element
        //     }
        //     amountStors.push(storeAmount)
        // }

        // або
        const amountStors = stores.map((store) => store.reduce((prevWeek, week) => prevWeek + week))

        return amountStors
    }

    // 2)
    function getStoreProfitsDay(stores) {
        // const profitDays = new Array(stores[0].length).fill(0)

        // for (let indexStore = 0; indexStore < stores.length; indexStore++) {
        //     for (let indexDay = 0; indexDay < 7; indexDay++) {
        //         switch (indexDay) {
        //             case 0:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 1:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 2:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 3:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 4:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 5:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             case 6:
        //                 profitDays[indexDay] += stores[indexStore][indexDay]
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }
        // }

        // return profitDays

        // abo
        const profitDays = []

        for (let indexStore = 0; indexStore < stores.length; indexStore++) {
            for (let indexDay = 0; indexDay < 7; indexDay++) {
                if (profitDays[indexDay] === undefined) profitDays[indexDay] = 0
                profitDays[indexDay] += stores[indexStore][indexDay]
            }
        }

        return profitDays
    }

    // 3) 
    function getProfitStoreWorkingDay(stores) {
        const profitStoreWorkingDay = []
        let amountWorkingDay = 0

        for (let indexStore = 0; indexStore < stores.length; indexStore++) {
            for (let indexDay = 0; indexDay < 5; indexDay++) {
                amountWorkingDay += stores[indexStore][indexDay]
            }
            profitStoreWorkingDay.push(amountWorkingDay)
            amountWorkingDay = 0
        }

        return profitStoreWorkingDay
    }

    // 4) 
    function getWeekendProfit(stores) {
        const amountProfitWeekend = []
        let amountWeekend = 0

        for (let indexStore = 0; indexStore < stores.length; indexStore++) {
            for (let indexDay = 5; indexDay < 7; indexDay++) {
                amountWeekend += stores[indexStore][indexDay]
            }
            amountProfitWeekend.push(amountWeekend)
            amountWeekend = 0
        }

        return amountProfitWeekend
    }

    // 5)
    function getMaximumProfitWednesday(stores) {
        const profitWednesday = []

        for (let indexStore = 0; indexStore < stores.length; indexStore++) {
            for (let indexDey = 0; indexDey < 7; indexDey++) {
                if (indexDey === 2) profitWednesday.push(stores[indexStore][indexDey])

            }
        }

        const maxWednesday = Math.max(...profitWednesday)

        return maxWednesday
    }

    // 6)
    function getArrayValueGreater(stores) {
        const valueGreater = stores.flat(2).filter(storValue => storValue > 200)

        return valueGreater
    }

    // 7)
    function getSortWeekAscending(stores) {
        const sortWeeks = stores.filter((store) => getSortMinMax(store))

        return sortWeeks
    }

    // Зробив глибоку копію масива для того щоб у мене не сортувався основний масив, 
    // в інакшому випвдку в мене соатується основний масив при виконанні буль якого сортування
    const copyProfitShops = JSON.parse(JSON.stringify(profitShops))
    const sortWeekAscending = getSortWeekAscending(copyProfitShops)

    // 8)
    function getSortWeekDescending(stores) {
        const sortWeeks = stores.filter((store) => getSortMaxMin(store))

        return sortWeeks
    }

    const secondCopyProfitShop = JSON.parse(JSON.stringify(profitShops))
    const sortWeekDescending = getSortWeekDescending(secondCopyProfitShop)

    // 9)
    function getSortWeeksDescendingAmount(stores) {
        const amountWeeksDescensing = stores.map((store) => store.reduce((prevWeek, week) => prevWeek + week))

        return getSortMaxMin(amountWeeksDescensing)
    }

    function getPrintStors(arrShops) {
        let str = '<br>'

        for (const shop of arrShops) {
            str += `[${shop}],<br>`
        }

        return str
    }

    function getPrintMessages(str, arr) {
        document.write(`<div style="overflow-x:auto;">${str} - \[${arr}\]</div>`)
    }

    const taskFirst = '1) Загальний прибуток кожного магазину за тиждень'
    const taskSecond = '2) Загальний прибуток магазинів по дням'
    const taskThird = '3) Загальний прибуток за робочі дні'
    const taskFourth = '4) Загальний прибуток за вихідні дні'
    const taskFifth = '5) Максимальний прибуток за середу'
    const taskSixth = '6) Одновимірний масив зі значенням, які що більші за 200'
    const taskSeventh = '7) Відсортувати кожен тиждень за зростанням'
    const taskEighth = '8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку)'
    const taskNinth = '9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку'

    getPrintMessages(taskFirst, getIndividualStoreAmount(profitShops))
    getPrintMessages(taskSecond, getStoreProfitsDay(profitShops))
    getPrintMessages(taskThird, getProfitStoreWorkingDay(profitShops))
    getPrintMessages(taskFourth, getWeekendProfit(profitShops))
    getPrintMessages(taskFifth, getMaximumProfitWednesday(profitShops))
    getPrintMessages(taskSixth, getArrayValueGreater(profitShops))
    getPrintMessages(taskSeventh, getPrintStors(sortWeekAscending))
    getPrintMessages(taskEighth, getPrintStors(sortWeekDescending))
    getPrintMessages(taskNinth, getSortWeeksDescendingAmount(sortWeekDescending))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}