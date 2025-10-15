'use strict'

// 1) Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
// 2) Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
// 3) Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). 
//    Підрахувати для кожного клієнта кількість відвідувань.
// 4) Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість 
//    студентів кожного з курсів.
// 5) Дано масив показів температур. Підрахувати кількість входжень кожного із показів let 
//    temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9] Заокруглити вверх значення та 
//    підрахувати кількість різних показів.
// 6) Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки 
//    студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів 
//    відвідують хоча б один гурток.

if (confirm('Почати тестування?')) {
    // 1)
    const listAges = Array.from({ length: 15 }, () => Math.floor(Math.random() * (30 - 18 + 1)) + 18);
    
    function countAges(arr) {
        const map = new Map()
        let count
        
        for (const age of arr) {
            count = map.get(age) ?? 0
            map.set(age, count + 1)
        }

        return map
    }

    function maxAge(map) {
        return Math.max(...map.keys())
    }

    // 2)
    const books = [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Animal Farm", author: "George Orwell", year: 1945 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "Lord of the Flies", author: "William Golding", year: 1954 },
        { title: "Catch-22", author: "Joseph Heller", year: 1961 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
        { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
        { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998 },
        { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
        { title: "Angels and Demons", author: "Dan Brown", year: 2000 },
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
        { title: "The Road", author: "Cormac McCarthy", year: 2006 },
        { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003 }
    ]

    function countAutor(arr) {
        const map = new Map()
        let count
        
        for (const book of arr) {
            count = map.get(book.author) ?? 0
            map.set(book.author, count + 1)
        }

        return map
    }

    // 3)
    const days = [
        [
            { login: "alex01" },
            { login: "john_doe" },
            { login: "maria22" },
            { login: "steve_k" },
            { login: "luna" },
            { login: "mark77" },
            { login: "nina_b" },
            { login: "peter09" },
            { login: "oliver" },
            { login: "jessica" }
        ],
        [
            { login: "alex01" },
            { login: "john_doe" },
            { login: "maria22" },
            { login: "chris89" },
            { login: "sofia" },
            { login: "nina_b" },
            { login: "peter09" },
            { login: "emma_l" },
            { login: "lucas" },
            { login: "steve_k" },
            { login: "luna" },
            { login: "david" }
        ]
    ]

    function countVisits(arr) {
        const map = new Map()
        let count
        
        for (let i = 0; i < arr.length; i++) {
            for (const user of arr[i]) {
                count = map.get(user.login) ?? 0
                map.set(user.login, count + 1)
            }        
        }

        return map
    }

    // 4)
    const students = [
        { name: "Alice Brown", course: 1, faculty: "Engineering" },
        { name: "Bob Smith", course: 1, faculty: "Economics" },
        { name: "Clara Johnson", course: 2, faculty: "Arts" },
        { name: "David Wilson", course: 3, faculty: "Medicine" },
        { name: "Emily Davis", course: 3, faculty: "Law" },
        { name: "Frank Miller", course: 1, faculty: "Arts" },
        { name: "Grace Taylor", course: 2, faculty: "Engineering" },
        { name: "Henry Anderson", course: 2, faculty: "Economics" },
        { name: "Isla Thomas", course: 4, faculty: "Arts" },
        { name: "Jack Moore", course: 5, faculty: "Medicine" },
        { name: "Kelly White", course: 1, faculty: "Law" },
        { name: "Liam Harris", course: 2, faculty: "Arts" },
        { name: "Mia Martin", course: 3, faculty: "Engineering" },
        { name: "Noah Clark", course: 4, faculty: "Economics" },
        { name: "Olivia Lewis", course: 5, faculty: "Arts" },
        { name: "Paul Robinson", course: 1, faculty: "Medicine" },
        { name: "Quinn Walker", course: 2, faculty: "Law" },
        { name: "Ruby Hall", course: 3, faculty: "Arts" },
        { name: "Sam Allen", course: 4, faculty: "Engineering" },
        { name: "Tina Young", course: 5, faculty: "Economics" },
        { name: "Uma King", course: 1, faculty: "Arts" },
        { name: "Victor Wright", course: 2, faculty: "Medicine" },
        { name: "Wendy Scott", course: 3, faculty: "Law" },
        { name: "Xander Green", course: 4, faculty: "Arts" },
        { name: "Yara Baker", course: 5, faculty: "Engineering" },
        { name: "Zane Adams", course: 1, faculty: "Economics" },
        { name: "Amber Nelson", course: 2, faculty: "Arts" },
        { name: "Brian Carter", course: 3, faculty: "Medicine" },
        { name: "Chloe Perez", course: 4, faculty: "Law" },
        { name: "Daniel Rivera", course: 5, faculty: "Arts" },
        { name: "Ella Cox", course: 1, faculty: "Engineering" },
        { name: "Felix Howard", course: 2, faculty: "Economics" },
        { name: "Georgia Ward", course: 3, faculty: "Arts" },
        { name: "Harvey Torres", course: 4, faculty: "Medicine" },
        { name: "Ivy Ramirez", course: 5, faculty: "Law" },
        { name: "Jake Flores", course: 1, faculty: "Arts" },
        { name: "Kara Simmons", course: 2, faculty: "Engineering" },
        { name: "Leo Foster", course: 3, faculty: "Economics" },
        { name: "Molly Gonzales", course: 4, faculty: "Arts" },
        { name: "Nate Bryant", course: 5, faculty: "Medicine" },
        { name: "Olga Petrova", course: 1, faculty: "Law" },
        { name: "Ivan Kovalenko", course: 2, faculty: "Engineering" },
        { name: "Sofia Melnyk", course: 2, faculty: "Arts" },
        { name: "Dmytro Shevchenko", course: 3, faculty: "Medicine" },
        { name: "Anna Bondar", course: 3, faculty: "Economics" },
        { name: "Maxim Tkachenko", course: 4, faculty: "Arts" },
        { name: "Olena Kravchenko", course: 4, faculty: "Law" },
        { name: "Roman Polishchuk", course: 5, faculty: "Engineering" },
        { name: "Kateryna Lysenko", course: 5, faculty: "Arts" },
        { name: "Viktor Savchenko", course: 5, faculty: "Medicine" }
    ]

    function uniqueFaculties(arr) {
        return new Set(arr.map(student => student.faculty)).size
    }

    function studentsInCourse (arr) {
        const map = new Map()
        let count
        
        for (const {course} of arr) {
            count = map.get(course) ?? 0
            map.set(course, count + 1)
        }

        return map
    }


    // 5)
    const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

    function countTemperatures(arr) {
        const map = new Map()
        let count
        
        for (const temp of arr) {
            count = map.get(temp) ?? 0
            map.set(temp, count + 1)
        }

        return map
    }

    // 6)
    const mathClub = [
        "Kovalenko",
        "Shevchenko",
        "Bondar",
        "Tkachenko",
        "Melnyk",
        "Kravchenko",
        "Polishchuk",
        "Lysenko",
        "Savchenko",
        "Moroz",
        "Petrenko",
        "Oliynyk",
        "Rudenko",
        "Horobets",
        "Zinchenko"
    ]

    const historyClub = [
        "Kovalenko",   
        "Shevchenko",  
        "Bondar",      
        "Marchenko",
        "Yurchenko",
        "Klymenko",
        "Taranenko",
        "Havrylenko",
        "Melnyk",      
        "Dmytrenko",
        "Savchuk",
        "Pavlenko",
        "Lytvyn",
        "Kostenko",
        "Rudenko"      
    ]

    function union(arr1, arr2) {
        const setA = new Set(arr1)
        const setB = new Set(arr2)

        return setA.union(setB).size
    }

    function intersection(arr1, arr2) {
        const setA = new Set(arr1)
        const setB = new Set(arr2)

        return setA.intersection(setB).size
    }

    function renderCollection(map, string) {
        const divEl = document.createElement('div')

        if(string) divEl.innerText = string

        for (const [key, value] of map) {
            const spanEl = document.createElement('div')
            spanEl.innerText =`${key} - ${value}`
            divEl.append(spanEl)
        }
        return divEl
    }

    function renderBooks(arr, string) {
        const booksListEl = document.createElement('div')

        if(string) booksListEl.innerText = string

       for (const {title, author, year} of arr) {
            const bookEl = document.createElement('div')
            bookEl.innerHTML = `${author} - ${title} ${year} y.`
            booksListEl.append(bookEl)
       } 

       return booksListEl
    }
    
    window.addEventListener('load', () => {
        // 1) ==========
        const agesEl = document.querySelector('.ages')
        const agesListEl = document.createElement('div')
        const maxEl = document.createElement('div')
        const mapAges = countAges(listAges)
        const str1 = 'Age is found in the list:' 

        agesListEl.innerText = `List of students' ages: ${listAges.join(', ')}`
        maxEl.innerHTML = `Maximum age: ${maxAge(mapAges)}`
        agesEl.append(
            agesListEl, 
            renderCollection(mapAges, str1), 
            maxEl
        )
        // ==========

        // 2) ==========
        const booksEl = document.querySelector('.books')
        const autors = countAutor(books)
        const str2 = 'List of books:'
        const str3 = 'Every author of books:'
        
        booksEl.append(
            renderBooks(books, str2),
            renderCollection(autors, str3)
        )
        // ==========

        // 3) ==========
        const visitsEl = document.querySelector('.visits')
        const visited = countVisits(days)
        const str4 = 'Customers who visited the site in two days - (count):'

        visitsEl.append(renderCollection(visited, str4))
        // ==========

        // 4) ==========
        const studentEl = document.querySelector('.students')
        const facultiesEl = document.createElement('div')
        const course = studentsInCourse(students)
        const str5 = 'In each course - students:'

        facultiesEl.innerText = `Number of different faculties: ${uniqueFaculties(students)}`

        studentEl.append(
            facultiesEl,
            renderCollection(course, str5)
        )
        // ==========

        // 5) ==========
        const tempEl = document.querySelector('.temperatures')
        const tempListEl = document.createElement('div')
        const countTemp = countTemperatures(temperatures)
        const str6 = 'Number of occurrences of each impression:'

        tempListEl.textContent = `Temperature readings: ${temperatures.join(', ')}`
        tempEl.append(
            tempListEl,
            renderCollection(countTemp, str6)
        )
        // ==========

        // 6) ==========
        const clubsEl = document.querySelector('.clubs')
        const mathClubEl = document.createElement('div')
        const historyClubEl = document.createElement('div')
        const unionEl = document.createElement('div')
        const intersectEl = document.createElement('div')

        mathClubEl.innerText = `1. Math clubs: ${mathClub.join(', ')}`
        historyClubEl.innerText = `2. History clubs: ${historyClub.join(', ')}`
        intersectEl.innerText = `Number of students attending both clubs: ${intersection(mathClub, historyClub)}`
        unionEl.innerText = `Number of students attending at least one club: ${union(mathClub, historyClub)}`
        clubsEl.append(
            mathClubEl,
            historyClubEl,
            intersectEl,
            unionEl
        )
        // ==========
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}