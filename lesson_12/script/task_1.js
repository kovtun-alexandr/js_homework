"use strict";
// 1) Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час 
//    сортування бульбашкою
// 2) Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час 
//    сортування змішуванням.
// 3) Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час 
//    сортування включеннями.
// 4) Для розглянутих методів сортування спробувати вивести етапи сортування шляхом 
//    виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів 
//    вивести поточний стан масиву на екран.
if (confirm('Почати тестування?')) {
    /**
     * Сreate an array with random values
     * @param count specify the length of the array
     * @param min minimum value of an array
     * @param max maximum value of an array
     * @returns a generated array of numbers with the specified length of elements and random values ​​from minimum to maximum
     */
    const getRandomArray = (count, min, max) => Array.from({ length: count }, () => min + Math.floor(Math.random() * (max - min + 1)));
    const numbers = getRandomArray(30, 5, 60);
    // 1)
    /**
     * The function performs bubble sort
     * @param arr accepts an array of numbers
     * @returns a two-dimensional array that returns a bubble-sorted array and the number of operations performed
     */
    function getBubbleSort(arr) {
        let countSort = 0;
        let indexEnd = arr.length;
        const sortArr = [...arr];
        let rowStr = '';
        for (let i = 0; i < indexEnd; i++) {
            for (let j = 0; j < indexEnd - 1; j++) {
                if (sortArr[j] > sortArr[j + 1]) {
                    const temp = sortArr[j];
                    sortArr[j] = sortArr[j + 1];
                    sortArr[j + 1] = temp;
                    countSort++;
                    rowStr += `\[${sortArr}\]`;
                }
            }
        }
        return [countSort, rowStr];
    }
    // 2)
    /**
     * The function performs merge sort
     * @param arr accepts an array of numbers
     * @returns a two-dimensional array that returns the merge sorted array and the number of operations performed
     */
    const getMergeSort = (arr) => {
        let countSort = 0;
        let leftIndex = 0;
        let rightIndex = arr.length - 1;
        const sortArr = [...arr];
        let rowStr = '';
        while (leftIndex < rightIndex) {
            let changed = false;
            for (let i = leftIndex + 1; i <= rightIndex; i++) {
                if (sortArr[i - 1] > sortArr[i]) {
                    const temp = sortArr[i - 1];
                    sortArr[i - 1] = sortArr[i];
                    sortArr[i] = temp;
                    changed = true;
                    countSort++;
                    rowStr += `\[${sortArr}\]`;
                }
            }
            rightIndex--;
            if (changed === false)
                break;
            changed = false;
            for (let i = rightIndex; i > leftIndex; i--) {
                if (sortArr[i - 1] > sortArr[i]) {
                    const temp = sortArr[i - 1];
                    sortArr[i - 1] = sortArr[i];
                    sortArr[i] = temp;
                    changed = true;
                    countSort++;
                    rowStr += `\[${sortArr}\]`;
                }
            }
            leftIndex++;
            if (changed === false)
                break;
        }
        return [countSort, rowStr];
    };
    // 3)
    /**
     * The function performs selection sort
     * @param arr accepts an array of numbers
     * @returns a two-dimensional array that returns the selection sorted array and the number of operations performed
     */
    const getSelectionSort = (arr) => {
        let countSort = 0;
        const prevLastIndex = arr.length - 2;
        const sortArr = [...arr];
        let rowStr = '';
        for (let i = 0; i <= prevLastIndex; i++) {
            for (let j = i + 1; j < sortArr.length; j++) {
                if (sortArr[i] > sortArr[j]) {
                    const temp = sortArr[i];
                    sortArr[i] = sortArr[j];
                    sortArr[j] = temp;
                    countSort++;
                    rowStr += `\[${sortArr}\]`;
                }
            }
        }
        return [countSort, rowStr];
    };
    // 4)
    /**
     * The function prints the solution to the screen
     * @param str the line accepts the condition of the problem
     * @param arr The array takes two parameters, the first is the total number of exchanges, the second is a row in the form of a table, how the sorting was done step by step
     */
    const getPrintMessages = (str, arr) => {
        document.write(`
            <div>${str} ${arr[0]}</div>
            <div style="overflow-y:auto;max-width:680px;height:311px;">${arr[1]}</div>
        `);
    };
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Згенерований масив з 30 випадкових цілих чисел: </br> \[${numbers}\]</div>
        <hr>
    `);
    const taskFirst = 'Під час сортування бульбашкою було обмінів:';
    const taskSecond = 'Під час сортування змішуванням було обмінів:';
    const taskThird = 'Під час сортування включеннями було обмінів:';
    getPrintMessages(taskFirst, getBubbleSort(numbers));
    getPrintMessages(taskSecond, getMergeSort(numbers));
    getPrintMessages(taskThird, getSelectionSort(numbers));
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
