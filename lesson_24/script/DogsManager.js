import { APIUtils } from "./APIUtils.js"
import { DOMUtils } from "./DOMUtils.js"
import { Dog } from "../components/Dog.js"

// Це був мій код до того поки я не помітив проблему, коли я повертаюсь з сторінки 
// dog-detail натискаючі кнопку назад браузера, в мене всі картки однакові у галереї, 
// поясніть в чому помила, і як вирішити цю проблему? 

// export class DogsManager {
//     constructor(dogsData = []) {
//         this.dogsData = dogsData
//         this.dogsSection = DOMUtils.createElement('div', ['gallery__list'])
//         this.isLoading = false

//         window.addEventListener('scroll', async () => {
//             const { scrollTop, scrollHeight, clientHeight } = document.documentElement

//             if (scrollTop + clientHeight >= scrollHeight - 10 && !this.isLoading) {
//                 this.isLoading = true
//                 await this.loadMoreDogs()
//                 this.isLoading = false
//             }
//         })
//     }

//     static async create() {
//         const data = await APIUtils.fetchMultipleDogs(18)
//         const manager = new DogsManager(data)
//         await manager.render()
//         return manager
//     }

//     async renderDogs() {
//         for (const dogData of this.dogsData) {
//             const dog = await Dog.create(dogData)
//             DOMUtils.appendChild(this.dogsSection, dog.render())
//         }

//         return this.dogsSection
//     }

//     async loadMoreDogs() {
//         const newDogs = await APIUtils.fetchMultipleDogs(9)
//         this.dogsData.push(...newDogs)

//         for (const dogData of newDogs) {
//             const dog = await Dog.create(dogData)
//             DOMUtils.appendChild(this.dogsSection, dog.render())
//         }
//     }

//     async render() {
//         const parentContainer = document.querySelector('.gallery__wrap')
//         parentContainer.innerHTML = ''
//         DOMUtils.appendChild(parentContainer, await this.renderDogs())

//         return parentContainer
//     }
// }

// так штучний інтелект допоміг віришити мою проблему
const SESSION_KEY = 'dogsData'

export class DogsManager {
    constructor(dogsData = []) {
        this.dogsData = dogsData
        this.dogsSection = DOMUtils.createElement('div', ['gallery__list'])
        this.isLoading = false
        this.page = 1
        this.maxPages = 10

        this._onScroll = this._onScroll.bind(this)
        window.addEventListener('scroll', this._onScroll)
    }

    static async create() {
        const storeData = sessionStorage.getItem(SESSION_KEY)
        let data

        if (storeData) {
            try {
                data = JSON.parse(storeData)
            } catch {
                data = await APIUtils.fetchMultipleDogs(18)
            }
        } else {
            data = await APIUtils.fetchMultipleDogs(18)
        }

        const manager = new DogsManager(data)
        await manager.loadMoreDogs(data) // початковий рендер
        return manager
    }

    async getDogsData(newDogsData = null) {
        const dogsToAdd = newDogsData || await APIUtils.fetchMultipleDogs(9)
        if (!newDogsData) this.dogsData.push(...dogsToAdd)
        return dogsToAdd
    }

    async loadMoreDogs(newDogsData = null) {
        if (this.isLoading || this.page > this.maxPages) return
        this.isLoading = true

        try {
            const dogsToAdd = await this.getDogsData(newDogsData)
            await this.renderDogs(dogsToAdd)
            this.page++
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(this.dogsData))
        } catch (error) {
            console.error('Error loading dogs:', error)
        } finally {
            this.isLoading = false
        }
    }

    async renderDogs(dogsToRender) {
        for (const dogData of dogsToRender) {
            const dog = await Dog.create(dogData)
            DOMUtils.appendChild(this.dogsSection, dog.render())
        }

        const parentContainer = document.querySelector('.gallery__wrap')
        if (!parentContainer.contains(this.dogsSection)) {
            parentContainer.appendChild(this.dogsSection)
        }
    }

    async _onScroll() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 10 && !this.isLoading) {
            await this.loadMoreDogs()
        }
    }
}