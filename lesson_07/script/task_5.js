'use strict'

if (confirm('Почати тестування?')) {
    const getCentimetersToInches = smNum => smNum / 2.54
    const getKilogramsToPounds = kgNum => kgNum * 2.20462
    const getKilometersToMiles = miNum => miNum * 0.621371

    const numberСentimeters = parseFloat(prompt('Введіть кількість сантиметрів:', '245'))
    const numberKilograms = parseFloat(prompt('Введіть кількість кілограм:', '1200'))
    const numberKilometers = parseFloat(prompt('Введіть кількість лілометрів', '2000'))

    document.write(`
        <ol>
            <li>Давжина ${numberСentimeters} см. у дюймах складає ${getCentimetersToInches(numberСentimeters)}</li>
            <li>Вага ${numberKilograms} кг. у фунтах складає ${getKilogramsToPounds(numberKilograms)}</li>
            <li>Відстань ${numberKilometers} км. у милях складає ${getKilometersToMiles(numberKilograms)}</li>
        </ol>    
    `)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}