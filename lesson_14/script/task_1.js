"use strict";
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 100000 і більше 100000
if (confirm('Почати тестування?')) {
    const companies = [
        {
            name: "TechNova",
            owner: "Ivanov Petro",
            sponsors: [
                { lastName: "Shevchenko", firstName: "Andriy", amount: 12000 },
                { lastName: "Melnyk", firstName: "Olena", amount: 8000 }
            ],
            year: 2005,
            cost: 76000
        },
        {
            name: "WebCore",
            owner: "Kovalenko Oleg",
            sponsors: [
                { lastName: "Bondarenko", firstName: "Iryna", amount: 15000 }
            ],
            year: 2019,
            cost: 110000
        },
        {
            name: "SoftVision",
            owner: "Kravets Anna",
            sponsors: [
                { lastName: "Tkachenko", firstName: "Dmytro", amount: 20000 },
                { lastName: "Marchenko", firstName: "Sergiy", amount: 7000 }
            ],
            year: 1999,
            cost: 52000
        },
        {
            name: "NextWeb",
            owner: "Pavlenko Yuriy",
            sponsors: [
                { lastName: "Kostenko", firstName: "Larysa", amount: 95000 },
                { lastName: "Lysenko", firstName: "Olha", amount: 6000 }
            ],
            year: 2021,
            cost: 145000
        },
        {
            name: "CyberLine",
            owner: "Hrytsenko Maksym",
            sponsors: [
                { lastName: "Polischuk", firstName: "Nazar", amount: 11000 }
            ],
            year: 2008,
            cost: 87000
        },
        {
            name: "InnovaWeb",
            owner: "Melnychenko Kateryna",
            sponsors: [
                { lastName: "Bohdan", firstName: "Oleksiy", amount: 12500 },
                { lastName: "Koval", firstName: "Viktoriya", amount: 99000 }
            ],
            year: 2015,
            cost: 134000
        },
        {
            name: "CodeWave",
            owner: "Zakharchenko Roman",
            sponsors: [
                { lastName: "Taran", firstName: "Mykhailo", amount: 7300 }
            ],
            year: 1997,
            cost: 69000
        },
        {
            name: "WebArt",
            owner: "Chornyi Artem",
            sponsors: [
                { lastName: "Danylko", firstName: "Taras", amount: 14000 }
            ],
            year: 2003,
            cost: 81000
        },
        {
            name: "FutureNet",
            owner: "Savchenko Daria",
            sponsors: [
                { lastName: "Horobets", firstName: "Andriy", amount: 110000 }
            ],
            year: 2020,
            cost: 142000
        },
        {
            name: "CloudPeak",
            owner: "Tkachenko Vadym",
            sponsors: [
                { lastName: "Shulha", firstName: "Borys", amount: 7800 }
            ],
            year: 2017,
            cost: 98000
        },
        {
            name: "PixelFlow",
            owner: "Polishchuk Nataliya",
            sponsors: [
                { lastName: "Rudenko", firstName: "Yaroslav", amount: 8800 }
            ],
            year: 1996,
            cost: 55000
        },
        {
            name: "DataForge",
            owner: "Yermak Oleksandr",
            sponsors: [
                { lastName: "Stetsenko", firstName: "Vitaliy", amount: 55000 },
                { lastName: "Ivanenko", firstName: "Svitlana", amount: 50000 }
            ],
            year: 2012,
            cost: 120000
        },
        {
            name: "WebSphere",
            owner: "Marchuk Iryna",
            sponsors: [
                { lastName: "Borysenko", firstName: "Oleksandr", amount: 9900 }
            ],
            year: 2009,
            cost: 93000
        },
        {
            name: "QuantumSoft",
            owner: "Lisnyk Mykola",
            sponsors: [
                { lastName: "Kondratiuk", firstName: "Ihor", amount: 17000 }
            ],
            year: 2024,
            cost: 150000
        },
        {
            name: "NovaTech",
            owner: "Havrylenko Oksana",
            sponsors: [
                { lastName: "Myronenko", firstName: "Andriy", amount: 13400 }
            ],
            year: 2014,
            cost: 99000
        },
        {
            name: "AlphaWeb",
            owner: "Khmil Serhiy",
            sponsors: [
                { lastName: "Yevtushenko", firstName: "Roman", amount: 11200 }
            ],
            year: 1998,
            cost: 67000
        },
        {
            name: "SkyNet",
            owner: "Miroshnyk Vitaliy",
            sponsors: [
                { lastName: "Karpenko", firstName: "Olena", amount: 12500 },
                { lastName: "Levchenko", firstName: "Pavlo", amount: 7200 }
            ],
            year: 2006,
            cost: 87000
        },
        {
            name: "ByteCraft",
            owner: "Shvets Viktoriya",
            sponsors: [
                { lastName: "Soroka", firstName: "Tetiana", amount: 9400 }
            ],
            year: 2011,
            cost: 102000
        },
        {
            name: "WebBridge",
            owner: "Yatsenko Denys",
            sponsors: [
                { lastName: "Krivko", firstName: "Illia", amount: 110000 }
            ],
            year: 2023,
            cost: 139000
        },
        {
            name: "LogicNet",
            owner: "Panchenko Alina",
            sponsors: [
                { lastName: "Moroz", firstName: "Kateryna", amount: 10000 }
            ],
            year: 2001,
            cost: 61000
        }
    ];
    // 1)
    /**
     * the function sums up the total development cost
     * @param arr with a list of sites
     * @returns the total development cost
     */
    function getTotalCoast(arr) {
        const totalCoast = arr.reduce((prevCoast, site) => site.cost > 0 ? prevCoast + site.cost : prevCoast, 0);
        // або
        // let totalCoast = 0
        // for (const site of arr) {
        //     totalCoast += site.siteCost
        // }
        return totalCoast;
    }
    // 2)
    /**
     * The function searches for sites that were made from 2000 to 2009.
     * @param arr with a list of sites
     * @returns a list of sites created from 2000 to 2009
     */
    function getMadeDuringPeriod(arr) {
        const madePeriod = arr.filter((site) => site.year >= 2000 && site.year <= 2009).length;
        return madePeriod;
    }
    // 3)
    /**
     * the function searches for the amount of sponsorship contributions
     * @param arr with a list of sites
     * @returns the number of sites where sponsorships were more than 100,000
     */
    function getAmountInvestment(arr) {
        const investment = arr.filter((site) => {
            const sumSponsors = site.sponsors.reduce((prevAmount, sponsor) => prevAmount + sponsor.amount, 0);
            return sumSponsors > 100000;
        }).length;
        return investment;
    }
    // 4)
    /**
     * the function creates an array with a list of all sponsors
     * @param arr with a list of sites
     * @returns returns a list of all sponsors
     */
    function getSponsors(arr) {
        const sponsors = arr.map((site) => site.sponsors).flat(Infinity);
        return sponsors;
    }
    // 5)
    /**
     * the function searches for the object with the maximum profit
     * @param arr with a list of sites
     * @returns the object with the maximum profit
     */
    function getMaxCoast(arr) {
        const maxCoast = arr.reduce((maxCost, site) => site.cost > maxCost.cost ? site : maxCost);
        return maxCoast.year;
    }
    // 6)
    /**
     * the function sorts an array of objects in descending order of profit
     * @param arr with a list of sites
     * @returns an array of objects sorted by decreasing profit
     */
    function getSortCompanies(arr) {
        const deepCopy = JSON.parse(JSON.stringify(arr));
        const sortCompanies = deepCopy.sort((a, b) => b.cost - a.cost);
        return sortCompanies;
    }
    // 7)
    /**
     * the function sorts the array by the price of the cost of creating a website
     * @param arr with a list of sites
     * @returns an array with two sorted arrays sorted by price greater than 100000 and less than 100000
     */
    function getSortingByCost(arr) {
        const sortLess = arr.filter((site) => site.cost < 100000);
        const sortMore = arr.filter((site) => site.cost > 100000);
        return [sortLess, sortMore];
    }
    const [lessCost, moreCost] = getSortingByCost(companies);
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Відповіді можливо побачити тільки в консолі!</div>
        <hr>
    `);
    console.log(companies);
    console.log(`Загальна вартість усіх сайтів - ${getTotalCoast(companies)}`);
    console.log(`Кількість сайтів, що було зроблено між 2000 та 2009 рр - ${getMadeDuringPeriod(companies)}`);
    console.log(`Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${getAmountInvestment(companies)}`);
    console.log('Загальний список усіх спонсорів:');
    console.log(getSponsors(companies));
    console.log(`Рік, коли прибуток був найбільшим - ${getMaxCoast(companies)}`);
    console.log('Список за спаданням прибутку:');
    console.log(getSortCompanies(companies));
    console.log('Сайти з вартістю до 100000');
    console.log(lessCost);
    console.log('Сайти з вартістю більше 100000');
    console.log(moreCost);
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
