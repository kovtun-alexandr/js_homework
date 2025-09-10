// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами 
// видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». 
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. 
// Підрахувати кількість вгаданих букв.

if (confirm('Почати тестування?')) {
    const words: string[] = ['Dog', 'Sun', 'Book', 'Tree', 'Milk']
    const answers: string[] = ['Собака', 'Сонце', 'Книга', 'Дерево', 'Молоко']
    const descriptions: string[] = [
        'Домашня тварина, найкращий друг людини.',
        'Велике світило, що дає світло й тепло Землі.',
        'Предмет із багатьма сторінками, у якому є текст.',
        'Рослина з корінням, стовбуром і кроною.',
        'Білий напій, який дають корови.'
    ]
    /**
     * the function generates a random number from minimum to maximum value
     * @param min minimum value
     * @param max maximum value
     * @returns a random generated number
     */
    const randomNum = (min: number, max: number): number => (min + Math.floor(Math.random() * (max - min + 1)))
    /**
     * The function creates a collection from an array
     * @param words accepts a bunch of words in English
     * @param descriptions accepts an array of word descriptions
     * @param answers accepts an array of words in Ukrainian
     * @returns an array of words in English, Ukrainian and a description
     */
    function getRandomСollection(words: string[], answers: string[], descriptions: string[]): string[] {
        const max: number = words.length - 1
        const num: number = randomNum(0, max)

        return [words[num], answers[num], descriptions[num]]
    }

    const collectionWord = getRandomСollection(words, answers, descriptions)

    /**
     * Game functionality is being executed (I have very complex circuits, so artificial intelligence did it.)
     * @param arr accepts an array of words in English, Ukrainian and a description
     */
    function game(arr: string[]) {
        const [englishWord, ukrWord, description] = arr

        alert('Вас вітає гра Перекладач! Вам потрібно вгадати слово по літерах!')

        /**
         * the function outputs the word by letters
         * @param word takes the floor
         * @returns the word one letter at a time until it ends
         */
        function makeIterator(word: string):any {
            let index:number = 0

            return function():string {
                if (index < word.length) {
                    const letter:string = word[index]
                    index++;
                    return letter 
                } else {
                    return 'Слово закінчилось!'
                }
            }
        }

        /**
         * the function gives a hint to the user in the form of letters of an English word
         * @param word takes the floor
         * @returns a function that makes a word hint from letters
         */
        function makeHintIterator(word: string):any {
            let index:number = 0

            return function() {
                if (index <= word.length) {
                    const part:string = word.slice(0, index)
                    if (word[index] !== undefined) {
                        alert(`Підказака: літера №${index + 1} - ${word[index]}. Частина слова ${index <= 0 ? word[index] : part}`)
                    } else {
                        alert(`Підказака: Це слово ${index <= 0 ? word[index] : part}`)
                    }
                    index++
                } else {
                    alert(`Це слово: ${word}`)
                }
            }
        }

        const nextLetter = makeIterator(ukrWord)
        const nextHint = makeHintIterator(englishWord)

        let correctCount:number = 0;
        
        alert(`Опис слова: ${description}`)

        let letterFromIterator:string = nextLetter()
        while (letterFromIterator !== 'Слово закінчилось!') {
            const hint:string = nextHint()
            const userInput:string = prompt('Введіть букву:') || ''
            if (userInput === letterFromIterator) {
                correctCount++;
                alert(`Ви вгадали: ${userInput}`)
            }

            letterFromIterator = nextLetter()
        }

        alert(`Ви вгадали, це було ${ukrWord}! кількість вгаданих літер: ${correctCount} із ${ukrWord.length}`)
    }

    game(collectionWord)
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}