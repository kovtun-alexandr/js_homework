import { DOMUtils } from "../script/DOMUtils.js"

export class DogDetail {
    constructor() {

    }

    getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search)
        const imageUrl = urlParams.get('image')
        const breed = imageUrl 
            ? imageUrl
                .replace('https://images.dog.ceo/breeds/', '')
                .split('/')[0]
                .split('-')
                .map(w => w[0].toUpperCase() + w.slice(1))
                .join(' ') 
            : 'unknown'

        return {breed, imageUrl}
    }

    createDogImage() {
        const {breed, imageUrl} = this.getUrlParams()
        const divEl = DOMUtils.createElement('div', ['dog-card__image', 'image-card'])
        const imageEl = DOMUtils.createElement('img', ['image-card__img'])
        imageEl.src = decodeURIComponent(imageUrl)
        imageEl.alt = `Dog breed ${breed || 'unknown'}`
        DOMUtils.appendChild(divEl, imageEl)

        return divEl
    }

    createDogContent() {
        return DOMUtils.createElement('div', ['dog-card__content', 'content-card'])
    }
    
    createDogTitle() {
        return DOMUtils.createElement('h1', ['content-card__title'], 'Wonderful dog')
    }

    creareDogBreed() {
        const {breed} = this.getUrlParams()
    
        const breedInfo = DOMUtils.createElement(
            'p',
            ['content-card__breed'],
            `Breed: ${breed || 'unknown'}`
        )

        return breedInfo
    }

    createDogInfo() {
        const info = DOMUtils.createElement('div', ['content-card__info', 'info-card'])
        
        const description = DOMUtils.createElement('h3', ['info-card__title'], 'Description')
        const descriptionText = DOMUtils.createElement(
            'p',
            '',
            'This wonderful dog is a representative of its breed. Dogs are man\'s best friends, bringing joy and love to our homes.'
        )
        
        const characteristics = DOMUtils.createElement('h3', ['info-card__title'], 'Characteristics')
        const characteristicsText = DOMUtils.createElement(
            'p',
            '',
            'Dogs are known for their loyalty, intelligence, and ability to learn. They can be excellent companions and protectors.'
        )

        this.button = DOMUtils.createElement(
            'button',
            ['info-card__btn'],
            'Go back'
        )
        
        DOMUtils.appendChild(info, [
            description,
            descriptionText,
            characteristics,
            characteristicsText,
            this.button
        ])

        return info
    }

    backClick() {
        window.location.href = '/lesson_24/parts/gallety.html'
    }

    render() {
        const dogDetail = document.querySelector('.dog-card')
        const content = this.createDogContent()
        const title = this.createDogTitle()
        const breed = this.creareDogBreed()
        const info = this.createDogInfo()

        this.button.addEventListener('click', () => this.backClick())
        
        DOMUtils.appendChild(content, [title, breed, info])
        DOMUtils.appendChild(dogDetail, [this.createDogImage(), content])
    }
}