'use strict'

// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у 
// змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в 
// іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен 
// переміщається у список для змагань. При натисканні на червону стрілку спортсмен 
// переміщається у загальний список.

if (confirm('Почати тестування?')) {
    function createPlayer () {
        const inputList = document.querySelectorAll('.add-player__input')
        const allFilled = Array.from(inputList).every(el => el.value.trim() !== '')

        if(!allFilled) return
        
        const player = Array.from(inputList)
            .map(el => el.value.trim())
            .join(' ')
        
        inputList.forEach((el) => el.value = '')

        createBlockElement(player)
    }

    function createElement (tag, options = {}) {
        const el = document.createElement(tag)

        if(options.classes) {
            el.classList.add(...options.classes)
        }

        if(options.text) {
            el.textContent = options.text
        }

        if(options.html) {
            el.innerHTML  = options.html
        }

        return el
    }

    function createBlockElement(player) {
        const divElement = createElement('div', {
            classes: ['list-player__item', 'item-player']
        })
        const titleElement = createElement('h4', {
            classes: ['item-player__title'],
            text: `${player}`
        })
        const buttonsElement = createElement('div', {
            classes: ['item-player__buttons']
        })
        const btnMoving = createElement('button', {
            classes: ['item-player__moving'],
            html: '<svg class="icon icon-arrow" role="img" aria-label="Arrow" aria-hidden="false"><use href="./image/sprite.svg#icon-arrow"></use></svg>'
        })
        const btnRemove = createElement('button', {
            classes: ['item-player__remove'],
            html: '<svg class="icon icon-close" role="img" aria-label="Close" aria-hidden="false"><use href="./image/sprite.svg#icon-close"></use></svg>'
        })

        divElement.append(titleElement)
        buttonsElement.append(btnMoving)
        buttonsElement.append(btnRemove)
        divElement.append(buttonsElement)

        addPlayerToList(divElement)
    }

    function addPlayerToList (element) {
        document.querySelector('.list-player__list').append(element)
    }

    function removeElement(e) {
        if (e.target.closest('.item-player__remove')){
            e.target.closest('.item-player').remove()
        }
    }

    function movingElement(e) {
        if (e.target.closest('.list-player__list')) {
            document.querySelector('.chosen-player__list').append(e.target.closest('.item-player'))
        } else if (e.target.closest('.chosen-player__list')) {
            document.querySelector('.list-player__list').append(e.target.closest('.item-player'))
        }
    }

    window.addEventListener('load', () => {
        document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})
        document.querySelector('.add-player__btn').addEventListener('click', createPlayer)
        document.querySelector('.list-player__list').addEventListener('click', removeElement)  
        document.querySelector('.chosen-player__list').addEventListener('click', removeElement)
        document.querySelector('.list-player__list').addEventListener('click', movingElement)
        document.querySelector('.chosen-player__list').addEventListener('click', movingElement)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}