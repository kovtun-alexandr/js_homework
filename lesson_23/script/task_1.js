'use strict'

// Дано клас PhoneNumber. Створити функцію перетворення до string, 
// при якому на основі номера виводиться оператор (050….  🡪 Vodafone, 096… 🡪 Kyivstar, ….)

if (confirm('Почати тестування?')) {
    class PhoneNumber {
        constructor(numbers, operators, parentSection) {
            this.numbers = [...numbers]
            this.operators = {...operators}
            this.parentEl = document.querySelector(parentSection)

            this.render()
        }

        phoneVerification() {
            const result = [];

            for (const number of this) {
                const code = number.slice(0, 3);
                let operatorName = 'Unknown'

                for (const key in this.operators) {
                    if (this.operators[key].code.includes(code)) {
                        operatorName = this.operators[key].name
                        break;
                    }
                }

                result.push(operatorName);
            }

            this.names = result;
        }

        createElement() {
            const divEl = document.createElement('div')

            for (let i = 0; i < this.numbers.length; i++) {
                const spanEl = document.createElement('span')
                spanEl.innerText = `${this.numbers[i]} 🡪 ${this.names[i]}`
                divEl.append(spanEl)
            }

            return this.parentEl.append(divEl)
        }

        *[Symbol.iterator]() {
            for (let i = 0; i < this.numbers.length; i++) {
                yield this.numbers[i]              
            }
        }

        [Symbol.toPrimitive](hint){
            if (hint === 'string') {
                return this.names.join(', ');
            }
            return null
        }

        render() {
            this.phoneVerification()
            this.createElement()
        }
    }

    const phones = [
        "0671234567",
        "0689876543",
        "0663456789",
        "0976543210",
        "0981122334",
        "0935566778",
        "0912233445",
        "0967788990",
        "0953322110",
        "0996677889"
    ]

    const operators = {
        kyivstar: {
            name: "Київстар",
            code: ["067", "068", "096", "097", "098"]
        },
        vodafone: {
            name: "Vodafone",
            code: ["050", "066", "095", "099"]
        },
        lifecell: {
            name: "Lifecell",
            code: ["063", "073", "093"]
        }
    }
    
    window.addEventListener('load', () => {
        const phoneNumber = new PhoneNumber(phones, operators, '.block-answer')
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}