import { DOMUtils } from "../script/DOMUtils.js"

export class Dog {
    constructor(dogData) {
        this.dogData = dogData
        this.breed = this.dogData.breed
        this.imageUrl = encodeURIComponent(this.dogData.message)
        this.render()
    }

    static async create(data) {
        return new Dog(data)
    }

    createImg() {
        const divEl = DOMUtils.createElement('div', ['item-dog__wrapper', 'wrapper-dog'])
        const link = DOMUtils.createElement('a', '')
        link.href = `/lesson_24/parts/dog-detail.html?breed=${this.breed}&image=${this.imageUrl}`
        const imageEl = DOMUtils.createElement('img', ['wrapper-dog__image'])
        imageEl.src = this.dogData.message, 
        imageEl.alt = `Dog breed ${this.createTitle().textContent || 'unknown' }`
        imageEl.loading = 'lazy'
        DOMUtils.appendChild(link, imageEl)
        DOMUtils.appendChild(divEl, link)
        
        return divEl
    }

    createTitle() { 
        const urtBreed = this.dogData.message
        const breedTitle = urtBreed
            .replace('https://images.dog.ceo/breeds/', '')
            .split('/')[0]
            .split('-')
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(' ')

        const link = DOMUtils.createElement('a', ['title__link'], breedTitle)

        link.href = `/lesson_24/parts/dog-detail.html?breed=${this.breed}&image=${this.imageUrl}`

        const titleEl = DOMUtils.createElement('h2', ['description-dog__title', 'title'])
       
        DOMUtils.appendChild(titleEl, link)

        return titleEl
    }

    render() {
        const sectionEl = DOMUtils.createElement('div', ['gallery__item', 'item-dog'])
        const imgEl = this.createImg()
        const decriptionEl = DOMUtils.createElement('div', ['item-dog__description', 'description-dog'])

        DOMUtils.appendChild(decriptionEl, this.createTitle())
        DOMUtils.appendChild(sectionEl, [imgEl, decriptionEl])

        return sectionEl
    }
}