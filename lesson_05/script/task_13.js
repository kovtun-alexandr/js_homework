'use strict'

//  Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 

if (confirm('Почати тестування?')) {
    const battleField = parseInt(prompt('Вас вітає гра мормький бій! Вкажіть зозмір поля N*M', '3'))
    const shipGorizontal = 1 + Math.floor(Math.random() * battleField)
    const shipVertical = 1 + Math.floor(Math.random() * battleField)
    let ship = shipGorizontal.toString() + shipVertical.toString(),
        shotGorizontal,
        shotVertical,
        shotOne = '',
        shotTwo = '',
        shotThree = ''

    for (let shell = 3; shell > 0; shell--) {
        shotGorizontal = prompt(`У вас поле розміром ${battleField} на ${battleField}. У вас є ${shell} постріла з 3, зробіть постріл по горізонталі`)
        shotVertical = prompt(`У вас поле розміром ${battleField} на ${battleField}. У вас є ${shell} постріла з 3, зробіть постріл по вертикалі`)
        switch (shell) {
            case 3:
                shotOne = shotGorizontal.toString() + shotVertical
                break;
            case 2:
                shotTwo = shotGorizontal.toString() + shotVertical
                break;
            case 1:
                shotThree = shotGorizontal.toString() + shotVertical
                break;
            default:
                break;
        }

        if (ship === shotOne || ship === shotTwo || ship === shotThree) {
            alert('Вітаю! ви потопили корабель!')
            break
        } else {
            if ((shell - 1) === 0) {
                alert(`Нажаль ви не влучили! У вас не лмшилось пострілів`)
            } else {
                alert(`Нажаль ви не влучили! У вас лишилось ${shell - 1} постріла`)
            }
        }
    }

    document.write('<table>')
    for (let i = 1; i <= battleField; i++) {
        document.write('<tr>')
        for (let j = 1; j <= battleField; j++) {
            if (shipGorizontal === i && shipVertical === j)
                if (shipGorizontal == shotOne.charAt(0) && shipVertical == shotOne.charAt(1)) {
                    document.write(`<td class="shot rip" width="40px" height="40px" style="background:red;position:relative;"></td>`)
                } else if (shipGorizontal == shotTwo.charAt(0) && shipVertical == shotTwo.charAt(1)) {
                    document.write(`<td class="shot rip" width="40px" height="40px" style="background:red;position:relative;"></td>`)
                } else if (shipGorizontal == shotThree.charAt(0) && shipVertical == shotThree.charAt(1)) {
                    document.write(`<td class="shot rip" width="40px" height="40px" style="background:red;position:relative;"></td>`)
                } else {
                    document.write(`<td width="40px" height="40px" style="background:gray;position:relative;"></td>`)
                }
            else {
                if (shotOne.charAt(0) == i && shotOne.charAt(1) == j || shotTwo.charAt(0) == i && shotTwo.charAt(1) == j || shotThree.charAt(0) == i && shotThree.charAt(1) == j)
                    document.write(`<td class="shot" width="40px" height="40px" style="background:lightblue;position:relative;"></td>`)
                else
                    document.write(`<td width="40px" height="40px" style="background:lightblue;position:relative;"></td>`)
            }

        }
        document.write('</tr>')

    }
    document.write('</table>')

    if (ship === shotOne || ship === shotTwo || ship === shotThree)
        document.write('Вітаю! ви потопили корабель!')
    else
        document.write('Нажаль ви не влучили в корабель!')
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}