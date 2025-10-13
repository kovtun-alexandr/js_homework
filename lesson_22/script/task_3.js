'use strict'

// 1) Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// 2) Дано масив рядків. Вивести ті, у яких немає цифр.
// 3) Дано масив рядків. Вивести ті, у яких є голосні літери.
// 4) Дано масив рядків. Вивести ті, у яких немає голосних літер.
// 5) Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
// 6) Дано рядок тексту, вивести усі числа, які є у тексті.
// 7) Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
// 8) Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// 9) Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// 10) Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// 11) Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). 
//     Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434».
// 12) Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці). 
//     Наприклад: “https://company.gov.ua”
// 13) Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
// 14) Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Киїівстар
// 15) Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
// 16)  Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»

if (confirm('Почати тестування?')) {
    // 1)
    function stringsWithNumbers(arr) {
        return arr.filter((string) => /\d/g.test(string))
    }

    // 2)
    function stringsWithoutNumbers(arr) {
        return arr.filter((string) => /^[^\d]+$/.test(string))
        // return arr.filter((string) => !/\d/.test(string))
    }

    // 3)
    function wordsWithVowels(arr) {
        return arr.filter((word) => /[aeiou]/i.test(word))
    }

    // 4)
    function wordsWithoutVowels(arr) {
        return arr.filter((word) => /^[^aeiou]+$/.test(word))
        // return arr.filter((word) => word.match(/^[^aeiou]+$/))
        // return arr.filter((word) => !/aeiou/.test(word))
        // return arr.filter((word) => word.search(/[aeiou]/) === -1)
    }

    // 5)
    function findNumber(arr, num1, num2) {
        const regex = new RegExp(`${num1}|${num2}`)
        return arr.filter((string) => regex.test(string))
    }

    // 6)
    function findAllNumbers(string) {
        return string.match(/\d/g)
    }

    // 7)
    function punctuationMarks(string) {
        return string.match(/[^\w\s]/g)
    }

    // 8)
    function splicePunctuationMarks(string) {
        return string.split(/[,.!?:;\-()]/).filter(Boolean)
    }

    // 9)
    function findDate(string) {
        if (/\d{2}\.\d{2}\.\d{4}/g.test(string)) {
            return 'Yes, the date is present in this string'
        } else {
            return 'No this line has no date in the format (dd.mm.yyyy)'
        }
        // return string.match(/\d{2}\.\d{2}\.\d{4}/g)
    }

    // 10)
    function twoDigitNumbers(string) {
        const count = string.match(/\d{2}/g)

        return count ? count.length : 0
    }

    // 11)
    function bankCard(string) {
        if (string.match(/(\b\d{16}\b|\b\d{4}\-\d{4}\-\d{4}\-\d{4}\b)/)) {
            return 'The text string is a bank card number'
        } else {
            return 'The text string is not a credit card number.'
        }
    }

    // 12)
    function governmentSite(url) {
        if (/gov/gi.test(url)) return 'Yes, this is a government site.'
        else return 'No, this is not a government site.'
    }

    // 13)
    function selectionYears(string) {
        return string.match(/20[2-4][0-9]/g)
    }

    // 14)
    function kyivstarCodes(string) {
        if (/(\+380[679][6-8]\d{7}|0[679][6-8]\d{7})/g.test(string)) {
            return string.match(/(\+380[679][6-8]\d{7}|0[679][6-8]\d{7})/g)
        } else {
            return 'There are no Kyivstar operator numbers.'
        }
    }

    // 15)
    function replacement() {
        const userName = document.querySelector('.name__input').value
        const messageEl = document.querySelector('.name__message')
        messageEl.textContent = ''
        messageEl.textContent = userName.replace(' ', '-')
    }

    // 16)
    function returnDate() {
        const inputDate = document.querySelector('.date__input').value
        const messageEl = document.querySelector('.date__message')
        messageEl.textContent = ''
        messageEl.textContent = inputDate.replaceAll('.', '/').match(/\d{2}\/\d{4}/)
    }

    function render(arr, parentElement) {
        const blockEl = document.createElement('div')

        blockEl.className = 'arr__list'

        if (Array.isArray(arr)) {
            for (const element of arr) {
                const itemEl = document.createElement('span')
                itemEl.className = 'arr__item'
                itemEl.innerText = `'${element}',`
                blockEl.append(itemEl)
            }
        } else {
            const itemEl = document.createElement('li')
            itemEl.className = 'arr__item'
            itemEl.innerText = arr
            blockEl.append(itemEl)
        }

        document.querySelector(parentElement).append(blockEl)
    }

    const strings = [
        'green forest under bright sun',
        'wind blows 7 leaves away',
        'small river flows through valley',
        '42 birds fly across the sky',
        'old train stops near station',
        'morning light covers the hills',
        'the fox jumps 3 times quickly',
        'soft rain touches quiet ground',
        'children play outside after school',
        'moonlight shines over 9 trees',
        'the cat sleeps near window',
        'city wakes up after 5am',
        'snow falls slowly on mountains',
        'a dog runs across the field',
        'stars sparkle 8 times tonight',
        'the ocean waves crash loudly',
        'autumn leaves cover the road',
        '12 flowers bloom in the garden',
        'music plays softly in the room',
        'dark clouds move across the sky'
    ]

    const words = [
        'echo',
        'sunny',
        'idea',
        'rainbow',
        'crypt',
        'myth',
        'rhythm',
        'ocean',
        'green',
        'shh',
        'audio',
        'tsk',
        'brrr',
        'hymn',
        'nth',
        'oasis',
        'mountain',
        'lynx',
        'apple',
        'gypsy'
    ]
 
    const str1 = 'On 12.10.2025, I scored "95" point`s; however, (3) mistakes were made!'
    const str2 = 'In 2000, the world prepared for digital change, and by 2003 new communication systems were already in place. During 2005 and 2007, several projects were launched that shaped the future of data networks. The global summit of 2010 confirmed that by 2012, automation would redefine production standards. In 2015, researchers compared results from 2008, 2011, and 2014, noticing a steady improvement. By 2020, new environmental policies were introduced; in 2021 and 2022, cities began implementing green infrastructure. Reports from 2023 and 2024 show that the goals set in 2019 were mostly achieved. Predictions for 2025, 2028, and 2030 suggest a new wave of innovation. The decade between 2031 and 2040 is expected to focus on artificial intelligence and climate adaptation. In 2042, historians may look back at the transformations that began in 2002 and 2016. Governments plan to finalize key agreements by 2045 and complete global integration by 2050. Some forecasts even extend to 2053 and 2055, outlining long-term missions in energy and space exploration.'
    const str3 = 'Hello, how are you? Good!'
    const card1 = '1234567812345678;'
    const card2 = '1A34-5678-12V4-56I8'
    const card3 = '1234-5678-1234-5678.'
    const url1 = 'https://company.gov.ua'
    const url2 = 'https://google.com'
    const phonesNum = '+380501234567, 0961234567, +380671112233, 0939876543, +380931234890, 0508765432, +380681234999, 0737654321, +380951001122, 0992233445'

    window.addEventListener('load', () => {
        render(strings, '.answer__strings')
        render(words, '.answer__words')
        render(stringsWithNumbers(strings), '.there-numbers')
        render(stringsWithoutNumbers(strings), '.no-number')
        render(wordsWithVowels(words), '.there-vowels')
        render(wordsWithoutVowels(words), '.no-vowels')
        render(findNumber(strings, 1, 3), '.search-number')
        render(str1, '.all-numbers__string')
        render(findAllNumbers(str1), '.all-numbers__answer')
        render(str1, '.punctuation-marks__string')
        render(punctuationMarks(str1), '.punctuation-marks__answer')
        render(str3, '.all-components__string')
        render(splicePunctuationMarks(str3), '.all-components__answer')
        render(str1, '.contain-date__string')
        render(findDate(str1), '.contain-date__answer')
        render(str1, '.two-numbers__string')
        render(twoDigitNumbers(str1), '.two-numbers__answer')
        render(card1, '.bank-card__string')
        render(card2, '.bank-card__string')
        render(card3, '.bank-card__string')
        render(bankCard(card1), '.bank-card__answer')
        render(bankCard(card2), '.bank-card__answer')
        render(bankCard(card3), '.bank-card__answer')
        render(url1, '.gov-site__string')
        render(url2, '.gov-site__string')
        render(governmentSite(url1), '.gov-site__answer')
        render(governmentSite(url2), '.gov-site__answer')
        render(str2, '.select-years__string')
        render(selectionYears(str2), '.select-years__answer')
        render(phonesNum, '.kyivstar-codes__string')
        render(kyivstarCodes(phonesNum), '.kyivstar-codes__answer')
        document.querySelector('.answer__list').addEventListener('submit', (e) => {e.preventDefault()})
        document.querySelector('.name__btn').addEventListener('click', replacement)
        document.querySelector('.date__btn').addEventListener('click', returnDate)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}