// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

const driverCategories = prompt('Введіть назву сатегорії', 'A').toLocaleLowerCase()
const categoryLight = 'Мотоциклом &#127949;'
const categoryMedium = 'Легковим автомобілем &#128663;'
const categoryHeavy = 'Вантажним автомобілем &#128666;'
const categoryTrailer = 'Вантажним автомобілем з причепом &#128667;'
const categoryBus = 'Автобусом &#128652;'

if (driverCategories === 'a' || driverCategories === 'а')
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ви маєте право на керування: ${categoryLight}`)
else if (driverCategories === 'b' || driverCategories === 'б')
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ви маєте право на керування: ${categoryMedium}`)
else if (driverCategories === 'c' || driverCategories === 'с')
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ви маєте право на керування: ${categoryHeavy}`)
else if (driverCategories === 'd' || driverCategories === 'д')
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ви маєте право на керування: ${categoryBus}`)
else if (driverCategories === 'e' || driverCategories === 'е')
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ви маєте право на керування: ${categoryTrailer}`)
else
    document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" нажаль данної категорії не існує &#128542;`)

// Або

// const driverCategories = prompt('Введіть назву сатегорії', 'A').toLocaleLowerCase()
// let category

// switch (driverCategories) {
//     case 'a':
//     case 'а':
//         category = 'ви маєте право на керування: Мотоциклом &#127949;'
//         break;
//     case 'b':
//     case 'б':
//         category = 'ви маєте право на керування: Легковим автомобілем &#128663;'
//         break;
//     case 'c':
//     case 'с':
//         category = 'ви маєте право на керування: Вантажним автомобілем &#128666;'
//         break;
//     case 'd':
//     case 'а':
//         category = 'ви маєте право на керування: Вантажним автомобілем з причепом &#128667;'
//         break;
//     case 'e':
//     case 'а':
//         category = 'ви маєте право на керування: Автобусом &#128652;'
//         break;
//     default:
//         category = 'нажаль данної категорії не існує &#128542;'
// }

// document.write(`Ви ввели категорію \"${driverCategories.toUpperCase()}\" ${category}`)