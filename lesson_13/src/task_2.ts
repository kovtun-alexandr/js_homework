// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами 
// видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». 
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. 
// Підрахувати кількість вгаданих букв.

if (confirm('Почати тестування?')) {
    // const words: string[] = ['Dog', 'Sun', 'Book', 'Tree', 'Milk']
    // const answers: string[] = ['Собака', 'Сонце', 'Книга', 'Дерево', 'Молоко']
    // const descriptions: string[] = [
    //     'Домашня тварина, найкращий друг людини.',
    //     'Велике світило, що дає світло й тепло Землі.',
    //     'Предмет із багатьма сторінками, у якому є текст.',
    //     'Рослина з корінням, стовбуром і кроною.',
    //     'Білий напій, який дають корови.'
    // ]
    // /**
    //  * 
    //  * @param min 
    //  * @param max 
    //  * @returns 
    //  */
    // const randomNum = (min: number, max: number): number => (min + Math.floor(Math.random() * (max - min + 1)))
    // /**
    //  * 
    //  * @param words 
    //  * @param descriptions 
    //  * @param answers 
    //  * @returns 
    //  */
    // function getRandomСollection(words: string[], answers: string[], descriptions: string[]): string[] {
    //     const max: number = words.length - 1
    //     const num: number = randomNum(0, max)

    //     return [words[num], answers[num], descriptions[num]]
    // }

    // const collectionWord = getRandomСollection(words, answers, descriptions)

    // /**
    //  * 
    //  * @param arr 
    // */
    // function game(arr: string[]) {
    //     alert('Вас вітає гра \"Прекладач\" вам потрібно відгадати слово по літерах')
    //     alert(`Підказка, це: ${arr[2]}`)

    //     const letter = giveLetter(arr[0])

    //     function giveLetter(str: string): string {
    //         let index = 0

    //         if (index >= str.length) return 'Слово закінчилось!'
    //         const letter = str[index]

    //         return letter
    //     }

    //     console.log(letter)
    // }

    // game(collectionWord)


} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}