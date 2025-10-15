'use strict'

// Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product 
// (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, 
// щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

if (confirm('Почати тестування?')) {
    class Shop {
        constructor(products, parentSection) {
            this.products = [...products]
            this.parentSection = document.querySelector(parentSection)
            this.render()
        }

        *[Symbol.iterator]() {
            for (const element of this.products) {
                yield element
            }
        }

        createElement() {
            const divEl = document.createElement('div')

            for (const el of this.products) {
                const spanEl = document.createElement('span')
                spanEl.innerText = `${el.name} - ${el.price * el.quantity} $`
                divEl.append(spanEl)
            }

            return this.parentSection.append(divEl)
        }

        render() {
            this.createElement()
        }
    }

    class Product {
        constructor(name, price, quantity) {
            this.name = name
            this.price = price
            this.quantity = quantity
        }
    }

    const products = [
        new Product('Refrigerator', 12000, 5),
        new Product('Microwave', 3500, 8),
        new Product('WashingMachine', 9800, 3),
        new Product('VacuumCleaner', 4200, 10),
        new Product('AirConditioner', 15000, 4),
        new Product('ElectricKettle', 900, 20),
        new Product('Toaster', 1200, 12),
        new Product('Blender', 1600, 15),
        new Product('CoffeeMaker', 2800, 6),
        new Product('Dishwasher', 11000, 2),
        new Product('Iron', 1500, 14),
        new Product('HairDryer', 1100, 18),
        new Product('Heater', 3600, 7),
        new Product('Fan', 2200, 9),
        new Product('TV', 18000, 5)
    ]
    
    window.addEventListener('load', () => {
        const shop = new Shop(products, '.block-answer')
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}