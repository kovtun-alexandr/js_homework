"use strict";
//  Розробити клас MultChecker для перевірки таблиці множення
// Поля     Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
//          Кількість правильних відповідей
//          Кількість неправильних відповідей
// Методи   Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
//          Перевірка правильності вказаної відповіді
//          render - виведення інформації про тестування на екран
if (confirm('Почати тестування?')) {
    const firstFactor = Number(prompt('Вкажіть число яке буде множником:(за замовченням 7)')) || 7;
    alert(`У вас буде таблиця множення на ${firstFactor}`);
    class MultChecker {
        constructor(num) {
            /**
             * the function generates a random number from minimum to maximum value
             * @param min minimum value
             * @param max maximum value
             * @returns a random generated number
             */
            this.randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            /**
             * the function performs multiplication
             * @param a takes a number a
             * @param b takes a number b
             * @returns the result of multiplying a by b
             */
            this.multiplication = (a, b) => a * b;
            this.multiplier = num;
            this.correctAnswers = 0;
            this.wrongAnswers = 0;
            this.examples = [];
        }
        /**
         * the function generates an array of objects with examples
         * @returns an array of objects with examples
         */
        generationExample() {
            const numberExamples = Number(prompt('Вкажіть кількість прикладів від 1 до 9: (за замовченням 5)')) || 5;
            for (let i = 0; i < numberExamples; i++) {
                const example = {
                    firstFactor: this.multiplier,
                    secondFactor: this.randomNum(1, 10),
                    product: 0
                };
                example.product = this.multiplication(example.firstFactor, example.secondFactor);
                this.examples.push(example);
            }
            return this.examples;
        }
        /**
         * The function displays examples and asks the user questions, checks whether
         * the user answered correctly and records the number of correct and incorrect answers.
         */
        checkingAnswer() {
            for (const element of this.examples) {
                const productAnswer = Number(prompt(`${element.firstFactor} * ${element.secondFactor} = ?`));
                if (productAnswer === element.product)
                    this.correctAnswers++;
                else
                    this.wrongAnswers++;
            }
        }
        /**
         * The function displays the number of correct and incorrect answers on the screen.
         */
        render() {
            this.generationExample();
            this.checkingAnswer();
            document.write(` * правельних відповіей - ${this.correctAnswers} <br> * не правельних відповідей - ${this.wrongAnswers}`);
        }
    }
    document.write(`
        <h2 class="homework__title">Результат тестування:</h2>
        <hr>     
    `);
    const multChecker = new MultChecker(firstFactor);
    multChecker.render();
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
