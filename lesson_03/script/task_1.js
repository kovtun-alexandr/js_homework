// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.

const nameFirstBaby = prompt('Введіть ім\'я першої дитини', 'Артем')
const nameSecondBaby = prompt('Введіть ім\'я другої дитини', 'Сергій')
const numberCandiesFirstBaby = parseInt(prompt(`Введіть кількість цукерок для ${nameFirstBaby}`, '3'))
const numberCandiesSecondBaby = parseInt(prompt(`Введіть кількість цукерок для ${nameSecondBaby}`, '5'))

if (numberCandiesFirstBaby === numberCandiesSecondBaby)
    document.write(`У ${nameFirstBaby} та ${nameSecondBaby} однакова кількість цукерок &#129489;`)
else if (numberCandiesFirstBaby > numberCandiesSecondBaby)
    document.write(`У ${nameFirstBaby} більше цукерок &#127852;`)
else
    document.write(`У ${nameSecondBaby} більше цукерок &#127852;`)