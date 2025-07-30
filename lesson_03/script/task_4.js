// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const personsAge = parseInt(prompt('Введіть ваш вік', '18'))
let printMassege = 'Ви'

if (personsAge > 0 && personsAge < 3) {
    const nurseling = ' немовля &#129329;'
    printMassege += nurseling
} else if (personsAge >= 3 && personsAge < 7) {
    const baby = ' дитина у садочку &#128118;'
    printMassege += baby
} else if (personsAge >= 7 && personsAge < 18) {
    const schoolChild = ' школяр &#128102;'
    printMassege += schoolChild
} else if (personsAge >= 18 && personsAge < 24) {
    const student = ' студент &#127891;'
    printMassege += student
} else if (personsAge >= 24 && personsAge < 65) {
    const worker = ' працівник &#128119;'
    printMassege += worker
} else if (personsAge >= 65 && personsAge < 100) {
    const pensioner = ' пенсіонер &#129491;'
    printMassege += pensioner
} else if (personsAge >= 100) {
    const longLiver = ' довгожитель &#128116;'
    printMassege += longLiver
} else {
    printMassege = 'Ви ще не народились &#128124;'
}

document.write(`${printMassege}`)