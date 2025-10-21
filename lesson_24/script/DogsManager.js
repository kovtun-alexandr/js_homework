import { APIUtils } from "./APIUtils.js"
import { DOMUtils } from "./DOMUtils.js"
import { Dog } from "../components/Dog.js"

export class DogsManager {
    constructor(dogsData = []) {
        this.dogsData = dogsData
        this.dogsSection = DOMUtils.createElement('div', ['gallery__list'])
        this.isLoading = false

        window.addEventListener('scroll', async () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement

            if (scrollTop + clientHeight >= scrollHeight - 10 && !this.isLoading) {
                this.isLoading = true
                await this.loadMoreDogs()
                this.isLoading = false
            }
        })
    }

    static async create() {
        const data = await APIUtils.fetchMultipleDogs(18)
        const manager = new DogsManager(data)
        await manager.render()
        return manager
    }

    async renderDogs() {
        for (const dogData of this.dogsData) {
            const dog = await Dog.create(dogData)
            DOMUtils.appendChild(this.dogsSection, dog.render())
        }

        return this.dogsSection
    }

    async loadMoreDogs() {
        const newDogs = await APIUtils.fetchMultipleDogs(9)
        this.dogsData.push(...newDogs)

        for (const dogData of newDogs) {
            const dog = await Dog.create(dogData)
            DOMUtils.appendChild(this.dogsSection, dog.render())
        }
    }

    async render() {
        const parentContainer = document.querySelector('.gallery__wrap')
        parentContainer.innerHTML = ''
        DOMUtils.appendChild(parentContainer, await this.renderDogs())

        return parentContainer
    }
}