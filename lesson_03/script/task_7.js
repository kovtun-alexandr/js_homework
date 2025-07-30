// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const numberMonthOfYear = parseInt(prompt('Вкажіть номер дня місяця:', '1'))
let season

switch (numberMonthOfYear) {
    case 12:
    case 1:
    case 2:
        season = 'Зими &#129398;'
        break;
    case 3:
    case 4:
    case 5:
        season = 'Весни &#128525;'
        break;
    case 6:
    case 7:
    case 8:
        season = 'Літа &#128526;'
        break;
    case 9:
    case 10:
    case 11:
        season = 'Осіні &#129321;'
        break
    default:
        season = 'Шкода, але ви ввели не існуючий місяць &#128542; їх лише 12!'
}

if (numberMonthOfYear > 0 && numberMonthOfYear <= 12)
    document.write(`Ви ввели ${numberMonthOfYear}-й місяць він має відношення до - ${season}`)
else
    document.write(`Ви ввели ${numberMonthOfYear}-й місяць - ${season}`)

// Або
// const numberMonthOfYear = parseInt(prompt('Вкажіть номер дня місяця:', '1'))

// if (numberMonthOfYear == 12 || numberMonthOfYear > 0 && numberMonthOfYear < 3)
//     document.write(`Ви ввели ${numberMonthOfYear}-й місяць він має відношення до - Зими &#129398;`)
// else if (numberMonthOfYear >= 3 && numberMonthOfYear < 6)
//     document.write(`Ви ввели ${numberMonthOfYear}-й місяць він має відношення до - Весни &#128525;`)
// else if (numberMonthOfYear >= 6 && numberMonthOfYear < 9)
//     document.write(`Ви ввели ${numberMonthOfYear}-й місяць він має відношення до - Літа &#128526;`)
// else if (numberMonthOfYear >= 9 && numberMonthOfYear < 12)
//     document.write(`Ви ввели ${numberMonthOfYear}-й місяць він має відношення до - Осіні &#129321;`)
// else
//     document.write(`Ви ввели ${numberMonthOfYear}-й місяць - Шкода, але ви ввели не існуючий місяць &#128542; їх лише 12!`)
