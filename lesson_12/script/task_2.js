"use strict";
// 1) Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//    чи є у масиві ім’я «Olga» і під яким індексом.
// 2) Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//    чи є у масиві ім’я довжиною 5 символів і під яким індексом.
if (confirm('Почати тестування?')) {
    const names = [
        "Oleksandr",
        "Andrii",
        "Mykola",
        "Petro",
        "Volodymyr",
        "Yurii",
        "Taras",
        "Stepan",
        "Vasyl",
        "Olga",
        "Bohdan",
        "Kateryna",
        "Oksana",
        "Tetiana",
        "Natalia",
        "Halyna",
        "Iryna",
        "Larysa",
        "Olena",
        "Mariia",
        "Anastasiia"
    ];
    /**
     * The function sorts an array of names
     * @param arr accepts an array of names
     * @returns an array of sorted names
     */
    const getSortArr = (arr) => {
        let indexEnd = arr.length;
        for (let i = 0; i < indexEnd; i++) {
            for (let j = 0; j < indexEnd - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };
    // 1)
    /**
     * The function searches for the given name and returns its index
     * @param arr accepts an array of names
     * @param name accepts a search value
     * @returns the index of the specified name if it is present, otherwise returns -1
     */
    const getSearchNameIndex = (names, name) => {
        let left = 0;
        let right = names.length - 1;
        const searchName = name.toLocaleLowerCase();
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midName = names[mid].toLocaleLowerCase();
            if (midName === searchName) {
                return mid;
            }
            else if (midName < searchName) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    };
    // 2)
    /**
     * The function sorts an array of names by word length
     * @param names accepts an array of names
     * @returns a sorted array of names by word length
     */
    const sortByLength = (names) => {
        return names.sort((a, b) => a.length - b.length);
    };
    /**
     * The function searches for a name by length
     * @param arr accepts an array of names
     * @param num pass the number of characters
     * @returns an array with name and index arrays with the specified length of letters
     */
    const getLookingShorterName = (sortNames, num) => {
        const result = [];
        let left = 0;
        let right = sortNames.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midLen = sortNames[mid].length;
            if (midLen === num) {
                let i = mid;
                while (i >= 0 && sortNames[i].length === num) {
                    result.unshift([sortNames[i], i]);
                    i--;
                }
                i = mid + 1;
                while (i < sortNames.length && sortNames[i].length === num) {
                    result.push([sortNames[i], i]);
                    i++;
                }
                return result;
            }
            else if (midLen < num) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return result;
    };
    /**
     * Displays the results of a two-dimensional array on the screen.
     * @param str accepts part of the task condition
     * @param arr accepts a two-dimensional array of name and index
     */
    function getPrintMessages(str, arr) {
        let arrStrPrint = '';
        for (let i = 0; i < arr.length; i++) {
            arrStrPrint += '<li>';
            for (let j = 0; j < arr[i].length; j++) {
                if (j !== 1)
                    arrStrPrint += `\"${arr[i][j]}\"`;
                else
                    arrStrPrint += ` має індекс - ${arr[i][j]}`;
            }
            arrStrPrint += '</li>';
        }
        document.write(`
            <div>${str} знайдено: ${arr.length} імен</div>
            <ul>${arrStrPrint}</ul>
        `);
    }
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>В нас є масив імен: </br> \[${names}\]</div>
        <hr>
    `);
    const sortNames = [...getSortArr(names)];
    document.write(`
        <div>Відсортований масив імен за алфавітом: </br> \[${sortNames}\]</div>
    `);
    const searchName = prompt('Яке імя ви хочете знайти?', 'Olga');
    const taskFirst = `1) У масиві ім’я \"${searchName}\"`;
    const taskSecond = '2) у масиві ім’я довжиною 5 символів';
    if (searchName !== null) {
        const index = getSearchNameIndex(sortNames, searchName);
        if (index >= 0) {
            document.write(`
                ${taskFirst} - має індекс ${index}
            `);
        }
        else {
            document.write(`
                ${taskFirst} - не знайдене
            `);
        }
    }
    else {
        document.write('1) Ви не вказали імя!');
    }
    const sortLehgs = [...sortByLength(names)];
    document.write(`
        <div></div>
        <div>Відсортований масив імен за довжиною: </br> \[${sortLehgs}\]</div>
    `);
    getPrintMessages(taskSecond, getLookingShorterName(sortLehgs, 5));
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
