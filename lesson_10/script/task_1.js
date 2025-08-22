'use strict'

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
// 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
// 3) Сформувати список з тих цін, які більші за попереднє значення.
// 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального.
// 5) Підрахувати кількість змін цін.
// 6) Визначити, чи є ціна, що менше 1000.
// 7) Визначати, чи усі ціни більше за 1000.
// 8) Підрахувати кількість цін, що більше за 1000.
// 9) Підрахувати суму цін, що більше за 1000.
// 10) Знайти першу ціну, що більше за 1000.
// 11) Знайти індекс першої ціни, що більше за 1000.
// 12) Знайти останню ціну, що більше за 1000.
// 13) Знайти індекс останньої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
    const ramdomNum = () => Math.floor(Math.random() * 10000) + 1

    function getRandomPriceList(num) {
        const newArr = new Array(num).fill(0)
        const pricesArr = newArr.map((price) => price = ramdomNum())

        return pricesArr
    }

    const pricesList = getRandomPriceList(20)

    // 1)
    function getSortPriceMore(prises) {
        const sortPrices = prises.filter((price) => price > 1000)

        return sortPrices
    }

    // 2)
    function getSortPriceIndexMore(prices) {
        const indexArr = prices
            .map((price, index) => (price > 1000) ? index : -1)
            .filter((index) => index !== -1)

        return indexArr
    }

    // 3) !!!Самостійно не зробив жoдного рішеня, лише за допомогою ШІ 😞
    function getLargerValuesPrevious(prices) {
        // const newPrices = prices.filter((price, index) => index > 0 && price > prices[index - 1])

        const newPrices = prices.reduce((prevPrice, price, index, baseArr) => {
            if (index > 0 && price > baseArr[index - 1]) {
                prevPrice.push(price);
            }
            return prevPrice;
        }, []);

        return newPrices
    }

    // 4) Тут також трішки запитав у ШІ, не зовсім розумів логіку виконання завдання
    function getValuePricePercentMaximum(prices) {
        const maxPrice = Math.max(...prices);
        const pricePercent = prices.map((price) => ((price / maxPrice) * 100).toFixed(2))

        return pricePercent
    }

    // 5)
    function getChangesPriceNumber(prices) {
        const changesPrice = prices.reduce((prevPrice, price) => (prevPrice !== price ? prevPrice + 1 : price), 0)

        return changesPrice
    }

    // 6)
    function getPriceLessMore(prices) {
        let str = ''
        const lessPrice = prices.some((price) => price < 1000)

        if (lessPrice) str = 'Так'
        else str = 'Ні'

        return str
    }

    // 7) 
    function getAllPricesMore(prices) {
        let str = ''
        const sortPrices = prices.every((price) => price > 1000)

        if (sortPrices) str = 'Так'
        else str = 'Ні'

        return str
    }

    // 8)
    function getCountPriceMore(prices) {
        const countPrice = prices.reduce((prevCount, price) => (price > 1000 ? prevCount + 1 : prevCount),
            0
        )

        return countPrice
    }

    // 9)
    function getSumPriceMore(prices) {
        const sumPrice = prices.reduce((prevPrice, price) => (price > 1000 ? prevPrice + price : prevPrice),
            0
        )

        return sumPrice
    }

    // 10)
    function getFirstPriceMore(prices) {
        const firstPrice = prices.find((price) => price > 1000)

        return firstPrice
    }

    // 11)
    function getFirstPriceIndexMore(prices) {
        const firstIndex = prices.findIndex((price) => price > 1000)

        return firstIndex
    }

    // 12)
    function getLastPriceMore(prices) {
        const lastPrice = prices.findLast((price) => price > 1000)

        return lastPrice
    }

    // 13)
    function getLastPriceIndexMore(prices) {
        const lastIndex = prices.findLastIndex((price) => price > 1000)

        return lastIndex
    }

    function getPrintMessages(str, arr) {
        document.write(`<div>${str} - \[${arr}\]</div>`)
    }

    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <ul>
            <li>Історія ціни на цінні папери: \[${pricesList}\]</li>
        </ul>
        <hr>
    `)

    const taskFirst = '1) Масив, у якому є тільки ті, що більші за 1000 грн'
    const taskSecond = '2) Масив, у якому є номери тільки тих, що більші за 1000 грн'
    const taskThird = '3) Масив з цін, яке більше за попереднє значення'
    const taskFourth = '4) Ціни що містять значення у відсотках стосовно максимального'
    const taskFifth = '5) Ціна змінювалась разів'
    const taskSixth = '6) Чи є ціна, що менше 1000'
    const taskSeventh = '7) Чи усі ціни більше за 1000?'
    const taskEighth = '8) кількість цін, що більше за 1000'
    const taskNinth = '9) суму цін, що більше за 1000'
    const taskTenth = '10) Перша ціна, що більше за 1000'
    const taskEleventh = '11) Індекс першої ціни, що більше за 1000'
    const taskTwelfth = '12) Остання ціна, що більше за 1000'
    const taskThirteenth = '13) Індекс останньої ціни, що більше за 1000'

    getPrintMessages(taskFirst, getSortPriceMore(pricesList))
    getPrintMessages(taskSecond, getSortPriceIndexMore(pricesList))
    getPrintMessages(taskThird, getLargerValuesPrevious(pricesList))
    getPrintMessages(taskFourth, getValuePricePercentMaximum(pricesList))
    getPrintMessages(taskFifth, getChangesPriceNumber(pricesList))
    getPrintMessages(taskSixth, getPriceLessMore(pricesList))
    getPrintMessages(taskSeventh, getAllPricesMore(pricesList))
    getPrintMessages(taskEighth, getCountPriceMore(pricesList))
    getPrintMessages(taskNinth, getSumPriceMore(pricesList))
    getPrintMessages(taskTenth, getFirstPriceMore(pricesList))
    getPrintMessages(taskEleventh, getFirstPriceIndexMore(pricesList))
    getPrintMessages(taskTwelfth, getLastPriceMore(pricesList))
    getPrintMessages(taskThirteenth, getLastPriceIndexMore(pricesList))
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}