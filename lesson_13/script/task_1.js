"use strict";
// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
if (confirm('Почати тестування?')) {
    const nameBoys = ["Andrii", "Bohdan", "Dmytro", "Oleksii", "Serhii"];
    const nameGirls = ["Anna", "Iryna", "Kateryna", "Olena", "Sofiia"];
    // using for loop
    /**
     * The function creates pairs from elements of two arrays
     * @param boys accepts an array of boys' names
     * @param girls accepts an array of girls' names
     * @returns the pair created from the element of the first array with the elements of the second array
     */
    function getCreatedPairs(boys, girls) {
        const pairs = [];
        for (let b = 0; b < boys.length; b++) {
            for (let g = 0; g < girls.length; g++) {
                const tampPair = [];
                tampPair.push(boys[b], girls[g]);
                pairs.push(tampPair);
            }
        }
        return pairs;
    }
    // using recursion
    /**
     * The function creates pairs from elements of two arrays using recursion
     * @param boys accepts an array of boys' names
     * @param girls accepts an array of girls' names
     * @returns the pair created from the element of the first array with the elements of the second array
     */
    function getMakePairs(boys, girls) {
        if (boys.length === 0)
            return [];
        const currentBoy = boys[0];
        const restBoys = boys.slice(1);
        const currentPair = getMakePairsForOneBoy(currentBoy, girls);
        const pairsOther = getMakePairs(restBoys, girls);
        return [...currentPair, ...pairsOther];
    }
    /**
     * The function creates an array of pairs from the elements of the first array with the elements of the second array
     * @param boy accepts a boy's name parameter
     * @param girls accepts an array of girl memes
     * @returns an array of pairs, an element (boy's name) with the elements of the array (girls' names)
     */
    function getMakePairsForOneBoy(boy, girls) {
        if (girls.length === 0)
            return [];
        const currentGirl = girls[0];
        const restGirls = girls.slice(1);
        const pair = [boy, currentGirl];
        const pairsOtherGirls = getMakePairsForOneBoy(boy, restGirls);
        return [pair, ...pairsOtherGirls];
    }
    /**
     * The function displays the results on the screen.
     * @param arr parameter accepts an array with results
     * @param use parameter accepts a string with the name of the method that was used
     */
    const printPairs = (arr, use) => {
        document.write(`<div>Виконано з допомогою \"${use}\":</div>`);
        for (let p = 0; p < arr.length; p++) {
            document.write(`
                <div>Пара №${p + 1} : ${arr[p][0]} - ${arr[p][1]}</div>
            `);
        }
        document.write('<hr>');
    };
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Масив хлопців: </br> \[${nameBoys}\]</div>
        <div>Масив дівчат: </br> \[${nameGirls}\]</div>
        <hr>
    `);
    printPairs(getCreatedPairs(nameBoys, nameGirls), 'циклу For');
    printPairs(getMakePairs(nameBoys, nameGirls), 'Рекурсії');
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
