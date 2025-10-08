'use strict'

// 1) Виводити на екран скільки хвилин користувач вже на сайті
// 2) Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.
// 3) Визначити скільки залишилось до кінця робочого дня (до 17.00)
// 4) Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
// 5) При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
// 6) Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
// 7) Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
// 8) Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
// 9) Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
// 10) Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
// 11) Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

if (confirm('Почати тестування?')) {
    class IsNotNumberError extends Error {
        constructor() {
            super()
            this.message = 'There must be a number.'
            this.name = 'IsNotNumberError'
        }
    }

    class IsInputEmptyError extends Error {
        constructor() {
            super()
            this.message = 'Please fill in the input field.'
            this.name = 'IsInputEmptyError'
        }
    }

    class TimerComponent {
        constructor(intervalMs = 1000) {
            this.intervalMs = intervalMs
            this.intervalId = null
        }

        start(callback) {
            if (this.intervalId) clearInterval(this.intervalId)
            callback()
            this.intervalId = setInterval(callback, this.intervalMs)
        }

        stop() {
            if (this.intervalId) clearInterval(this.intervalId)
        }
    }

    // 1)
    class TimeOnSite extends TimerComponent {
        constructor(parentElement) {
            super(1000)
            this.container = document.querySelector(parentElement)
            this.startTime = new Date()
            this.intervalMs = 1000
            this.start(this.render.bind(this))
        }

        render() {
            const diff = Math.floor((new Date() - this.startTime) / this.intervalMs)
            this.container.textContent = `${diff}`
        }
    }

    // 2)
    class Procedure {
        constructor(formEl, inputEl, messageEl) {
            this.form = document.querySelector(formEl)
            this.input = document.querySelector(inputEl)
            this.message = document.querySelector(messageEl)

            this.form.addEventListener('submit', this.handleSubmit.bind(this))
        }
        
        handleSubmit(e) {
            e.preventDefault()
            
            this.inputValue = this.input.value.trim()
            this.message.textContent = ''

            try {
                if (!this.inputValue) throw new IsInputEmptyError()
            } catch (error) {
                return this.message.textContent = `${error.message} Specify the procedure time`
            }
           
            this.render()
        }

        checkProcedureTime() {
            const [hours, minutes] = this.inputValue.split(':').map(Number)
            
            try {
                if (isNaN(hours) && isNaN(minutes)) throw new IsNotNumberError()
            } catch (error) {
                return this.message.textContent = `${error.message}`
            }

            this.nowTime = new Date()
            const startTime = new Date()
            startTime.setHours(hours, minutes, 0, 0)
            const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)

            if (this.nowTime < startTime) {
                const diffMs = startTime - this.nowTime
                const diffHours = Math.floor(diffMs / 1000 / 60 / 60)
                const diffMinutes = Math.floor((diffMs / 1000 / 60) % 60)
                return `There is time left until the procedure ${diffHours} hours ${diffMinutes} minutes`
            } 
            else if (this.nowTime >= startTime && this.nowTime >= endTime) {  
                return 'The procedure has already ended.'
            }
            else {
                return 'The procedure is still ongoing.'
            }
        }

        render() {
            this.message.textContent = `${this.checkProcedureTime()}`
        }
    }

    // 3)
    class EndWorkingDay extends TimerComponent {
        constructor(time, containerElement) {
            super(60000)
            this.endWorktime = time
            this.container = document.querySelector(containerElement)
            this.render()
            this.start(this.render.bind(this))
        }

        checking() {
            const [endHour, endMinute] = this.endWorktime.split(':').map(Number)
            const nowTime = new Date()
            const endTime = new Date(
                nowTime.getFullYear(), 
                nowTime.getMonth(), 
                nowTime.getDate(), 
                endHour, 
                endMinute
            )

            let diffMs = endTime - nowTime

            if (diffMs < 0) {
                endTime.setDate(endTime.getDate() + 1)
                diffMs = endTime - nowTime
            }

            const diffHours = Math.floor(diffMs / 1000 / 60 / 60)
            const diffMinutes = Math.floor((diffMs / 1000 / 60) % 60)

            return `${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}`
        }

        render() {
            this.container.textContent = this.checking()
        }
    }

    // 4)
    class CurrentWeek {
        constructor(formEl, inputEl, messageEl) {
            this.form = document.querySelector(formEl)
            this.input = document.querySelector(inputEl)
            this.message = document.querySelector(messageEl)
            this.now = new Date()

            this.form.addEventListener('submit', this.handleSubmit.bind(this))
        }
        
        handleSubmit(e) {
            e.preventDefault()
            
            this.inputValue = this.input.value.trim()
            this.message.textContent = ''

            try {
                if (!this.inputValue) throw new IsInputEmptyError()
            } catch (error) {
                return this.message.textContent = `${error.message} Enter the date in the format \'yyyy-mm-dd hh:mm\'`
            }
           
            this.render()
        }

        startWeek() {
            this.monday = new Date()

            const dayOfWeek = this.now.getDay() || 7
            
            this.monday.setDate(this.now.getDate() - dayOfWeek + 1)
            this.monday.setHours(0, 0, 0, 0)

            return this.monday
        }

        endWeek() {
            this.sanday = new Date(this.monday)
    
            this.sanday.setDate(this.monday.getDate() + 6)
            this.sanday.setHours(23, 59, 59, 999)

            return this.sanday
        }

        parseInputDate() {
            const [datePart, timePart] = this.inputValue.split(' ')
            const [year, month, day] = datePart.split('-').map(Number)
            const [hours, minutes] = timePart.split(':').map(Number)

            return new Date(year, month - 1, day, hours, minutes)
        }
            
        checkDate() {
            const start = this.startWeek()
            const input = this.parseInputDate()
            const end = this.endWeek()

            return input >= start && input <= end
        }

        getMessage() {
            return this.checkDate() 
            ? 'The specified date and time is within the current week.'
            : 'The specified date and time is not within the current week.'
        }

        render() {
            this.message.textContent = this.getMessage()
        }
    }

    // 5)
    class Popup {
        constructor({ title = 'Info', message = ''} = {}) {
            this.title = title
            this.message = message
            this.createPopup()
            this.show()
        }

        createPopup() {
            this.popup = document.createElement('div')
            this.popup.className = 'popup'
            this.popup.innerHTML = `
                <div class="popup__content">
                    <h2 class="popup__title">${this.title}</h2>
                    <p class="popup__message">${this.message}</p>
                    <button class="popup__close">
                        <svg class="icon icon-close" role="img" aria-label="Close" aria-hidden="false"><use href="./image/sprite.svg#icon-close"></use></svg>
                    </button>
                </div>
            `
            document.body.appendChild(this.popup)

            this.messageEl = this.popup.querySelector('.popup__message')
            this.popup.querySelector('.popup__close').addEventListener('click', () => this.close())
        }

        show() {
            this.popup.classList.add('popup--visible')
        }

        updateMessage(newMessage) {
            if(this.messageEl) {
                this.messageEl.textContent = newMessage
            }
        }

        close() {
            this.popup.classList.remove('popup--visible')
            setTimeout(() => this.popup.remove(), 300)
        }
    }

    class GreetUser {
        constructor() {
            this.popap = new Popup({
                title: 'Welcome!',
                message: this.render()
            })
            this.startTimer()
        }

        startTimer() {
            this.intervalId = setInterval(() => {
                const newMassage = this.render()
                this.popap.updateMessage(newMassage)
            }, 60000); 
        }

        checkTime() {
            this.nowTime = new Date()
            const endTime = new Date()
            endTime.setHours(8, 0, 0, 0)   

            if (this.nowTime > endTime) {
                endTime.setDate(endTime.getDate() + 1)
            }

            const diffMs = endTime - this.nowTime
            
            return Math.floor((diffMs / 1000 / 60))
        }

        render() {
            return `There is time left until the start of the working day: ${this.checkTime()} min.`
        }
    }

    // 6)
    class WhatTime extends TimerComponent {
        constructor(initObjZones, paremtElement){
            super(1000)
            this.objZones = {...initObjZones}
            this.container = document.querySelector(paremtElement)
            this.listBlock = this.createList()
            this.container.append(this.listBlock)
            this.start(this.render.bind(this))
        }

        createList() {
            const listBlock = document.createElement('ul')
            listBlock.className = 'zone__list'
            this.items = {}

            for (const city of Object.keys(this.objZones)) {
                const liEl = document.createElement('li')
                liEl.className = 'zone__item'
                liEl.textContent = `${city} : --:--:--`
                this.items[city] = liEl
                listBlock.append(liEl)
            }

            return listBlock
        }

        updateTimes() {
            const times = this.formater()
            for (const [city, time] of Object.entries(times)) {
                const name = city.charAt(0).toUpperCase() + city.slice(1)
                this.items[city].textContent = `${name} : ${time}`
            }
        }

        formater() {
            const now = new Date()
            const formattedTimes = {}

            for (const [city, zone] of Object.entries(this.objZones)) {
                formattedTimes[city] = now.toLocaleTimeString('uk-UA', {
                    timeZone: zone,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })
            }

            return formattedTimes
        }

        render() {
            this.updateTimes()
        }
    }

    // 7)
    class Oldest {
        constructor(initDataStudents, containerElement) {
            this.dataStudents = [...initDataStudents]
            this.container = document.querySelector(containerElement)
            this.render()
        }

        searchOldest() {
            const oldestStudent = this.dataStudents.reduce((oldSt, student) => {
                const [dayOld, monthOld, yearOld] = oldSt.birth.split('.').map(Number)
                const [dayStud, monthStud, yearStud] = student.birth.split('.').map(Number)

                const oldDate = new Date(yearOld, monthOld - 1, dayOld)
                const studDate = new Date(yearStud, monthStud - 1, dayStud)

                return studDate < oldDate ? student : oldSt
            })

            return oldestStudent
        }

        render() {
            const oldest = this.searchOldest()
            this.container.textContent = ` ${oldest.name}, date of birth: ${oldest.birth}`
            console.log(this.dataStudents)
        }
    }

    // 8)
    class MouseMovement {
        constructor(contentElement) {
            this.container = document.querySelector(contentElement)
            this. startTime = performance.now()
            this.mouseMove = this.mouseMove.bind(this)

            window.addEventListener('mousemove', this.mouseMove)
        }

        mouseMove(e) {
            const endTime = performance.now()
            const diffMs = endTime - this.startTime

            this.container.textContent = `${((diffMs / 1000).toFixed(2))} s`

            window.removeEventListener('mousemove', this.mouseMove)
        }
    }

    // 9)
    // I'll admit it right away! I did two tasks and saw that the methods were very similar, 
    // differing in a few variables, I wrote the task to the artificial intelligence, 
    // it made me a common class
    // My code 
    // class MaternityLeave  { 
    //     constructor(formEl, inputEl, messageEl){ 
    //         this.form = document.querySelector(formEl) 
    //         this.input = document.querySelector(inputEl) 
    //         this.message = document.querySelector(messageEl) 
    //         this.dayValue = 200
    //         this.form.addEventListener('submit', this.handleSubmit.bind(this))
    //     }

    //     handleSubmit(e) {
    //         e.preventDefault()

    //         this.dateValue = this.input.value.trim()
    //         this.message.textContent = ''

    //         try {
    //             if (!this.dateValue) throw new IsInputEmptyError()
    //         } catch (error) {
    //             return this.message.textContent = `${error.message} Select a date `
    //         }
        
    //         this.render()
    //     }

    //     checkDate() {
    //         const inputDate = new Date(this.dateValue)
    //         const nowDate = new Date()

    //         inputDate.setDate(inputDate.getDate() + this.dayValue)

    //         return inputDate > nowDate 
    //     }

    //     getMessage() {
    //         return this.checkDate()  
    //             ? 'The vacation is already underway.'
    //             : 'The vacation is already over.'
    //     }

    //     render() {
    //         this.message.textContent = this.getMessage()
    //     }
    // }

    // class ExpirationDate {
    //     constructor(formEl, inputsEl, messageEl) {
    //         this.form = document.querySelector(formEl)
    //         this.inputs = document.querySelectorAll(inputsEl)
    //         this.message = document.querySelector(messageEl)

    //         this.form.addEventListener('submit', this.handleSubmit.bind(this))
    //     }

    //     handleSubmit(e) {
    //         e.preventDefault()

    //         this.dateValue = this.inputs[0].value.trim()
    //         this.dayValue = Number(this.inputs[1].value.trim())
    //         this.message.textContent = ''

    //         try {
    //             if (!this.dateValue && (isNaN(this.dayValue) || this.dayValue === 0)) throw new IsInputEmptyError()
    //         } catch (error) {
    //             return this.message.textContent = `${error.message} Select a date or enter the number of days`
    //         }
        
    //         this.render()
    //     }

    //     checkDate() {
    //         const inputDate = new Date(this.dateValue)
    //         const nowDate = new Date()

    //         inputDate.setDate(inputDate.getDate() + this.dayValue)

    //         return inputDate > nowDate
    //     }

    //     message() {
    //         return this.checkDate() 
    //             ? 'The product is suitable for consumption.'
    //             : 'The product is not suitable for consumption.'
    //     }

    //     render() {
    //         this.message.textContent = this.message()
    //     }
    // }

    class DateChecker {
        constructor(formEl, messageEl) {
            this.form = document.querySelector(formEl);
            this.message = document.querySelector(messageEl);
            this.dateValue = '';
            this.dayValue = 0;

            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }

        handleSubmit(e) {
            e.preventDefault();
            this.message.textContent = '';

            this.getInputValues();

            try {
                if (!this.dateValue || isNaN(this.dayValue) || this.dayValue === 0) {
                    throw new IsInputEmptyError();
                }
            } catch (error) {
                this.message.textContent = `${error.message} ${this.getErrorMessage()}`;
                return;
            }

            this.render();
        }

        checkDate() {
            const inputDate = new Date(this.dateValue);
            const nowDate = new Date();

            inputDate.setDate(inputDate.getDate() + this.dayValue);

            return inputDate > nowDate;
        }

        render() {
            this.message.textContent = this.getMessage();
        }

        getInputValues() {
            throw new Error('getInputValues() must be implemented');
        }

        getMessage() {
            throw new Error('getMessage() must be implemented');
        }

        getErrorMessage() {
            return 'Please fill in the required fields.';
        }
    }

    class MaternityLeave extends DateChecker {
        constructor(formEl, inputEl, messageEl) {
            super(formEl, messageEl);
            this.input = document.querySelector(inputEl);
            this.dayValue = 200;
        }

        getInputValues() {
            this.dateValue = this.input.value.trim();
        }

        getMessage() {
            return this.checkDate()
                ? 'The vacation is already underway.'
                : 'The vacation is already over.';
        }

        getErrorMessage() {
            return 'Select a date';
        }
    }

    // 10)
    class ExpirationDate extends DateChecker {
        constructor(formEl, inputsEl, messageEl) {
            super(formEl, messageEl);
            this.inputs = document.querySelectorAll(inputsEl);
        }

        getInputValues() {
            this.dateValue = this.inputs[0].value.trim();
            this.dayValue = Number(this.inputs[1].value.trim());
        }

        getMessage() {
            return this.checkDate()
                ? 'The product is suitable for consumption.'
                : 'The product is not suitable for consumption.';
        }

        getErrorMessage() {
            return 'Select a date or enter the number of days';
        }
    }

    // 11)
    class Sort {
        constructor(initData, containerElement) {
            this.data = [...initData]
            this.container = document.querySelector(containerElement)
            this.render()
        }

        createTextEl() {
            const textEl = document.createElement('p')
            return textEl
        }

        timer(metod) {
            const start = performance.now()

            metod()

            const end = performance.now()

            return `- ${(end - start).toFixed(2)} ms`
        }

        bubble() {
            this.sortBubble = [...this.data]
            for (let i = 0; i < this.sortBubble.length; i++) {
            for (let j = 0; j < this.sortBubble.length - 1; j++) {
                if (this.sortBubble[j] > this.sortBubble[j + 1]) {
                    const temp = this.sortBubble[j]
                    this.sortBubble[j] = this.sortBubble[j + 1]
                    this.sortBubble[j + 1] = temp
                }
            }
        }
        return this.sortBubble
        }

        insertion() {
            this.sortInsertion = [...this.data]
            
            for (let i = 1 ; i < this.sortInsertion.length; i++) {
                const current = this.sortInsertion[i]
                let j = i
                while (j > 0 && this.sortInsertion[j - 1] > current) {
                    this.sortInsertion[j] = this.sortInsertion[j - 1]
                    j--
                }
                this.sortInsertion[j] = current
            }
            return this.sortInsertion
        }

        render() {
            const bubble = this.createTextEl()
            const insertion = this.createTextEl()
            bubble.textContent = `Sort bubble ${this.timer(this.bubble.bind(this))}`
            insertion.textContent = `Sort insertion ${this.timer(this.insertion.bind(this))}`
            this.container.append(bubble, insertion)
            console.log(this.data)
        }
    }

    // ===================================
    const zones = {
        london: 'Europe/London', 
        paris: 'Europe/Paris', 
        sydney: 'Australia/Sydney'
    }

    const students = [
        { name: 'Alex', birth: '12.03.2005' },
        { name: 'Maria', birth: '25.11.2006' },
        { name: 'John', birth: '04.02.2004' },
        { name: 'Sophia', birth: '19.08.2005' },
        { name: 'Daniel', birth: '07.06.2006' },
        { name: 'Emma', birth: '23.09.2005' },
        { name: 'Liam', birth: '30.12.2004' },
        { name: 'Olivia', birth: '10.04.2005' },
        { name: 'Noah', birth: '17.05.2006' },
        { name: 'Ava', birth: '28.07.2005' },
        { name: 'Ethan', birth: '14.01.2004' },
        { name: 'Isabella', birth: '09.03.2005' },
        { name: 'Mason', birth: '21.10.2006' },
        { name: 'Mia', birth: '06.11.2005' },
        { name: 'Lucas', birth: '02.02.2004' },
        { name: 'Amelia', birth: '16.09.2005' },
        { name: 'Elijah', birth: '11.07.2006' },
        { name: 'Harper', birth: '03.12.2005' },
        { name: 'James', birth: '08.04.2004' },
        { name: 'Charlotte', birth: '22.05.2006' }
    ]

    const getRandomArray = (count, min, max) => Array.from({ length: count }, () => min + Math.floor(Math.random() * (max - min + 1)));

    window.addEventListener('load', () => {
        const timeOnSite = new TimeOnSite('#time-site')
        const procedure = new Procedure('.procedure__form', '.procedure__input', '.procedure__message')
        const endWorkingDay = new EndWorkingDay('17:00', '#end-work') 
        const currentWeek = new CurrentWeek('.current-week__form', '.current-week__input', '.current-week__message')    
        const whatTime = new WhatTime(zones, '.zpne')
        const oldest = new Oldest(students, '#oldest')
        const maternityLeave = new MaternityLeave('.vacation__form', '.vacation__input', '.vacation__message')
        const expirationDate = new ExpirationDate('.expiration__form', '.expiration__input', '.expiration__message')
        const arr = getRandomArray(1000, 1, 800)
        const sort = new Sort(arr, '.sort')
        const mouseMove = new MouseMovement('#mouse')
        const greetUser = new GreetUser()
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}