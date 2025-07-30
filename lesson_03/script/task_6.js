// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const numberDayOfWeek = parseInt(prompt('Вкажіть номер дня тижня:', '1'))
let dayName

switch (numberDayOfWeek) {
    case 1:
        dayName = 'Понеділок &#129320;'
        break;
    case 2:
        dayName = 'Вівторок &#128563;'
        break;
    case 3:
        dayName = 'Середа &#128550;'
        break;
    case 4:
        dayName = 'Четвер &#128551;'
        break;
    case 5:
        dayName = 'П\'ятниця &#129395;'
        break;
    case 6:
        dayName = 'Субота &#129322;'
        break;
    case 7:
        dayName = 'Неділя &#128579;'
        break
    default:
        dayName = 'Шкода, але ви ввели не існуючий день тижня &#128542;'
}

document.write(`Ви ввели ${numberDayOfWeek}-й день тижня - ${dayName}`)