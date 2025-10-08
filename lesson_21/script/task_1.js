'use strict'

// Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, 
// чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе 
// він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . 
// Обробку усіх помилок зробити з використанням відповідних класів.

if (confirm('Почати тестування?')) {
    class IsNotNumberError extends Error {
        constructor() {
            super()
            this.message = 'There must be a number'
            this.name = 'IsNotNumberError'
        }
    }

    class IsNegativeNumberError extends Error {
        constructor() {
            super()
            this.message = 'Cannot be negative'
            this.name = 'IsNegativeNumberError'
        }
    }

    class IsTooHightMonthError extends Error {
        constructor(currentMonthNumber){
            super()
            this.currentMonthNumber = currentMonthNumber
            this.message = 'There cannot be more than 12 months'
            this.name = 'IsTooHightMonthError'
        }
    }

    class IsSemesterEndingSoon extends Error {
        constructor(currentMonthNumber) {
            super()
            this.currentMonthNumber = currentMonthNumber
            this.message = 'The semester is ending soon.'
            this.name = 'IsSemesterEndingSoon'
        }
    }

    class IsVacationError extends Error {
        constructor(currentMonthNumber){
            super()
            this.currentMonthNumber = currentMonthNumber
            this.message = 'These are the months of vacation'
            this.name = 'isVacationError'
        }
    }

    class IsLowScoreError extends Error {
        constructor(currentScoreNumber) {
            super()
            this.currentScoreNumber = currentScoreNumber
            this.message = 'You have a low score.'
            this.name = 'IsLowScoreError' 
        }
    }

    class IsTooHightScoreError extends Error {
        constructor(currentScoreNumber) {
            super()
            this.currentScoreNumber = currentScoreNumber
            this.message = 'Your score cannot be higher than 100'
            this.name = 'IsTooHightScoreError'
        }
    }
    
    class IsGoodStudent extends Error {
        constructor(currentScoreNumber) {
            super()
            this.currentScoreNumber = currentScoreNumber
            this.message = 'You are a good student.'
            this.name = 'IsGoodStudent'
        }
    }

    function verify() {
        const messageEl = document.querySelector('.homework__message')
        
        messageEl.textContent = ''
        
        try {
            const month = parseInt(document.querySelectorAll('.form__input')[0].value)
            const score = parseInt(document.querySelectorAll('.form__input')[1].value)
            if (isNaN(month) && isNaN(score)) throw new IsNotNumberError()
            if (month < 1 && score < 1) throw new IsNegativeNumberError()
            if ((month === 1 || (month > 5 && month < 9))) throw new IsVacationError(month)
            if ((score <= 60) && (month === 12 || month === 5)) throw new IsSemesterEndingSoon(month)
            if (month > 12) throw new IsTooHightMonthError(month)
            if (score > 100) throw new IsTooHightScoreError(score)
            if ((score <= 60) && ((month > 1 && month < 6) || (month > 8 && month < 12))) throw new IsLowScoreError(score)
            if ((score > 60 && score <= 100)) throw new IsGoodStudent(score)
        } catch (error) {
            if (error instanceof IsNotNumberError) {
                messageEl.textContent = error.message + ' Write only numbers'
            } else if (error instanceof IsNegativeNumberError) {
                messageEl.textContent = error.message + " Cannot be negative and less than 1"
            } else if (error instanceof IsSemesterEndingSoon) {
                messageEl.textContent = error.message + ' There is not enough time.'
            } else if (error instanceof IsTooHightMonthError) {
                messageEl.textContent = error.message + ' Cannot be more than 12 months.'
            } else if (error instanceof IsLowScoreError) {
                messageEl.textContent = error.message + ' Can it be fixed'
            } else if (error instanceof IsTooHightScoreError) {
                messageEl.textContent = error.message + ' Cannot be greater than 100.'
            } else if (error instanceof IsGoodStudent) {
                messageEl.textContent = error.message + ' Keep it up!'
            } else messageEl.textContent = error.message
            document.querySelectorAll('.form__input').forEach(el => el.value = '')
            return false
        }

        document.querySelectorAll('.form__input').forEach(el => el.value = '')
        return true
    }

    window.addEventListener('load', () => {
        document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})
        document.querySelector('.form__btn').addEventListener('click', verify)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}