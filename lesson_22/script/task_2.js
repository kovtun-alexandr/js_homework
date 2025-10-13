'use strict'

// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). 
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm('Почати тестування?')) {
    class IsInputEmptyError extends Error {
        constructor() {
            super()
            this.message = 'Please fill in the input field.'
            this.name = 'IsInputEmptyError'
        }
    }

    class StorageDB {
        constructor(storageKey) {
            this.storageKey = storageKey
        }

        loadData() {
            if (localStorage.getItem(this.storageKey))
                return JSON.parse(localStorage.getItem(this.storageKey))
            else return []
        }

        saveData(list) {
            localStorage.setItem(this.storageKey, JSON.stringify(list))
        }

        addItem(item) {
            const list = this.loadData()
            const newItem = { id: Date.now() + Math.floor(Math.random() * 1000), ...item }
            list.push(newItem)
            this.saveData(list)
        }

        removeItem(id) {
            let list = this.loadData()
            list = list.filter((el) => el.id != id)
            this.saveData(list)
        }

        updateItem(item) {
            const list = this.loadData()
            const elIndex = list.findIndex((el) => el.id == item.id)
            list[elIndex] = item
            this.saveData(list)
        }

        getItem(id) {
            const list = this.loadData()
            return list.find((el) => el.id == id)
        }
    }

    class Task {
        constructor({title, priority}) {
            this.title = title
            this.priority = priority
        }

        createTaskEl() {
            const divEl = document.createElement('div')
            const btnEl = document.createElement('button')
            divEl.className = 'tasks__item'
            btnEl.className = 'tasks__remove'
            divEl.innerText = `${this.title} - ${this.priority}`
            btnEl.innerHTML = `<svg class="icon icon-close" role="img" aria-label="Close" aria-hidden="false"><use href="./image/sprite.svg#icon-close"></use></svg>`
            divEl.append(btnEl)

            return divEl
        }
    }

    class TaskManager {
        constructor(storageKey, containerSelector, addBtnSelector){
            this.db = new StorageDB(storageKey)
            this.container = document.querySelector(containerSelector)
            this.addBtn = document.querySelector(addBtnSelector)

            this.addBtn.addEventListener('click', this.addTask.bind(this))
            this.render()
            window.addEventListener('storage', this.onChangeStorage.bind(this))

            this.startRandomReminders(10, 3600)
        }

        addTask() {
            const inputTitle = document.getElementById('tasks-title')
            const inputPriority = document.getElementById('tasks-priority')
            const message = document.querySelector('.form-tasks__message')

            const title = inputTitle.value.trim()
            const priority = inputPriority.value.trim()

            try {
                if(!title || !priority) throw new IsInputEmptyError()
            } catch (error) {
                return message.innerText = error.message
            }

            this.db.addItem({
                title,
                priority,
            })

            this.render()

            inputTitle.value = ''
            inputPriority.value = ''
            message.innerText = ''
        }

        attachRemoveEl(el, id) {
            const removeBtn = el.querySelector('.tasks__remove')

            if (removeBtn) 
                removeBtn.addEventListener('click', () => this.removeTask(id))
        }

        getRandomInterval(minSec = 10, maxSec = 3600) {
            return Math.floor(Math.random() * (maxSec - minSec + 1) + minSec) * 1000
        }

        startRandomReminders(minSec = 10, maxSec = 3600) {
            const run = () => {
                const tasks = this.db.loadData()
                if (tasks.length === 0) {
                    this.stopRandomReminders()
                    return
                }

                const randomIndex = Math.floor(Math.random() * tasks.length)
                const randomTask = tasks[randomIndex]

                if (confirm(`Task: ${randomTask.title}\nDelete it?`)) {
                    this.removeTask(randomTask.id)
                }

                const nextInterval = this.getRandomInterval(minSec, maxSec)
                this.randomTimeoutId = setTimeout(run, nextInterval)
            }

            const firstInterval = this.getRandomInterval(minSec, maxSec)
            this.randomTimeoutId = setTimeout(run, firstInterval)
        }

        stopRandomReminders() {
            clearTimeout(this.randomTimeoutId)
        }

        removeTask(id){
            this.db.removeItem(id)
            this.render()
        }

        sortTaskList() {
            const tasks = this.db.loadData()

            return tasks.sort((a, b) => Number(b.priority) - Number(a.priority))
        }

        createTaskList() {
            const tasks = this.sortTaskList()
            for (const data of tasks) {
                const task = new Task(data)
                const el = task.createTaskEl()

                this.attachRemoveEl(el, data.id)
                this.container.append(el)
            }
        }

        onChangeStorage(event) {
            if (event.key === this.db.storageKey) {
                this.render()
            }
        }

        render() {
            this.container.innerHTML = ''
            this.createTaskList()
        }
    }
    
    window.addEventListener('load', () => {
        const db = new StorageDB('tasks')

        if (db.loadData().length === 0) {
            db.addItem({ title: 'Drink Coffee', priority: '5' })
            db.addItem({ title: 'Make a homework', priority: '10' })
            db.addItem({ title: 'Read a book', priority: '2' })
        }

        const taskManager = new TaskManager('tasks', '.tasks__list', '.form-tasks__btn')

        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
        })
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}