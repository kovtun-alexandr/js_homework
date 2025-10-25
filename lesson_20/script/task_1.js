'use strict'
// Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для 
// фільтрування з використанням випадаючого списку (контент цих випадаючих списків 
// сформувати у залежності від переданого списку).


if (confirm('Почати тестування?')) {
    const cars = [
        { id: 1, brand: "BMW", model: "M3", year: 2018, price: 42000, image: "./image/bmw_m3.webp" },
        { id: 2, brand: "BMW", model: "X5", year: 2021, price: 60000, image: "./image/bmw_x5.webp" },
        { id: 3, brand: "BMW", model: "i8", year: 2019, price: 95000, image: "./image/bmw_i8.webp" },
        { id: 4, brand: "Audi", model: "A4", year: 2019, price: 35000, image: "./image/audi_a4.webp" },
        { id: 5, brand: "Audi", model: "Q7", year: 2020, price: 50000, image: "./image/audi_q7.webp" },
        { id: 6, brand: "Audi", model: "R8", year: 2022, price: 160000, image: "./image/audi_r8.webp" },
        { id: 7, brand: "Mercedes-Benz", model: "C-Class", year: 2017, price: 32000, image: "./image/mercedes_benz_c.webp" },
        { id: 8, brand: "Mercedes-Benz", model: "GLE", year: 2021, price: 70000, image: "./image/mercedes_benz_gle.webp" },
        { id: 9, brand: "Mercedes-Benz", model: "S-Class", year: 2022, price: 110000, image: "./image/mercedes_benz_s.webp" },
        { id: 10, brand: "Toyota", model: "Camry", year: 2019, price: 25000, image: "./image/toyota_camry.webp" },
        { id: 11, brand: "Toyota", model: "RAV4", year: 2022, price: 32000, image: "./image/toyota_raw4.webp" },
        { id: 12, brand: "Toyota", model: "Supra", year: 2021, price: 50000, image: "./image/toyota_supra.webp" },
        { id: 13, brand: "Honda", model: "Civic", year: 2018, price: 21000, image: "./image/honda_civic.webp" },
        { id: 14, brand: "Honda", model: "CR-V", year: 2021, price: 28000, image: "./image/honda_crv.webp" },
        { id: 15, brand: "Honda", model: "Accord", year: 2020, price: 27000, image: "./image/honda_accord.webp" },
        { id: 16, brand: "Ford", model: "Focus", year: 2017, price: 18000, image: "./image/ford_focus.webp" },
        { id: 17, brand: "Ford", model: "Mustang", year: 2020, price: 45000, image: "./image/ford_mustang.webp" },
        { id: 18, brand: "Ford", model: "Explorer", year: 2021, price: 38000, image: "./image/ford_explorer.webp" },
        { id: 19, brand: "Nissan", model: "Altima", year: 2018, price: 22000, image: "./image/nissan_altima.webp" },
        { id: 20, brand: "Nissan", model: "GTR", year: 2022, price: 95000, image: "./image/nissan_grt.webp" },
        { id: 21, brand: "Nissan", model: "Juke", year: 2019, price: 20000, image: "./image/nissan_juke.webp" },
        { id: 22, brand: "Volkswagen", model: "Golf", year: 2016, price: 17000, image: "./image/volkswagen_golf.webp" },
        { id: 23, brand: "Volkswagen", model: "Passat", year: 2019, price: 24000, image: "./image/volkswagen_passat.webp" },
        { id: 24, brand: "Volkswagen", model: "Tiguan", year: 2020, price: 31000, image: "./image/volkswagen_tiguan.webp" },
        { id: 25, brand: "Mazda", model: "3", year: 2019, price: 21000, image: "./image/mazda_3.webp" },
        { id: 26, brand: "Mazda", model: "CX-5", year: 2021, price: 29000, image: "./image/mazda_cx5.webp" },
        { id: 27, brand: "Subaru", model: "Forester", year: 2020, price: 27000, image: "./image/subaru_forester.webp" },
        { id: 28, brand: "Subaru", model: "Impreza", year: 2019, price: 22000, image: "./image/subaru_impreza.webp" },
        { id: 29, brand: "Lexus", model: "RX", year: 2020, price: 42000, image: "./image/lexus_rx.webp" },
        { id: 30, brand: "Lexus", model: "IS", year: 2018, price: 37000, image: "./image/lexus_ls.webp" },
        { id: 31, brand: "Kia", model: "Sportage", year: 2021, price: 27000, image: "./image/kia_sportage.webp" },
        { id: 32, brand: "Kia", model: "Optima", year: 2019, price: 23000, image: "./image/kia_optima.webp" },
        { id: 33, brand: "Hyundai", model: "Elantra", year: 2018, price: 20000, image: "./image/hyundai_elantra.webp" },
        { id: 34, brand: "Hyundai", model: "Tucson", year: 2020, price: 26000, image: "./image/hyundai_tucson.webp" },
        { id: 35, brand: "Tesla", model: "Model 3", year: 2021, price: 48000, image: "./image/tesla_model_3.webp" },
        { id: 36, brand: "Tesla", model: "Model X", year: 2022, price: 90000, image: "./image/tesla_model_x.webp" },
        { id: 37, brand: "Tesla", model: "Model S", year: 2021, price: 95000, image: "./image/tesla_model_s.webp" },
        { id: 38, brand: "Porsche", model: "911", year: 2021, price: 120000, image: "./image/porsche_911.webp" },
        { id: 39, brand: "Porsche", model: "Cayenne", year: 2022, price: 105000, image: "./image/porsche_cayenne.webp" },
        { id: 40, brand: "Jaguar", model: "F-Type", year: 2020, price: 85000, image: "./image/jaguar_f_type.webp" },
        { id: 41, brand: "Jaguar", model: "XE", year: 2019, price: 42000, image: "./image/jaguar_xe.webp" },
        { id: 42, brand: "Volvo", model: "XC90", year: 2021, price: 72000, image: "./image/volvo_xc90.webp" },
        { id: 43, brand: "Volvo", model: "S60", year: 2019, price: 36000, image: "./image/volvo_s60.webp" },
        { id: 44, brand: "Chevrolet", model: "Camaro", year: 2020, price: 40000, image: "./image/chevrolet_camaro.webp" },
        { id: 45, brand: "Chevrolet", model: "Tahoe", year: 2021, price: 52000, image: "./image/chevrolet_tahoe.webp" },
        { id: 46, brand: "Fiat", model: "500", year: 2017, price: 15000, image: "./image/fiat_500.webp" },
        { id: 47, brand: "Fiat", model: "Panda", year: 2019, price: 16000, image: "./image/fiat_panda.webp" },
        { id: 48, brand: "Renault", model: "Clio", year: 2018, price: 17000, image: "./image/renault_clio.webp" },
        { id: 49, brand: "Renault", model: "Megane", year: 2020, price: 22000, image: "./image/renault_megane.webp" },
        { id: 50, brand: "Jeep", model: "Wrangler", year: 2021, price: 45000, image: "./image/jeep_wrangler.webp" }
    ];
    
    class Car {
        constructor(carData) {
            this.carData = {...carData}
        }
        
        createImageElement() {
            const img = document.createElement('img')
            img.className = 'car__image'
            img.setAttribute('src', this.carData.image)

            return img
        }

        createTitleElement() {
            const titleEl = document.createElement('h3')
            titleEl.className = 'car__title'
            titleEl.innerText = this.carData.brand + ' ' + this.carData.model

            return titleEl
        }

        createYearElement() {
            const yearEl = document.createElement('div')
            yearEl.className = 'info-car__year'
            yearEl.innerText = `Realeas: ${this.carData.year}`

            return yearEl
        }

        createPriceElement() {
            const priceEl = document.createElement('div')
            priceEl.className = 'info-car__price'
            priceEl.innerText = `Price: ${this.carData.price} $`

            return priceEl
        }

        render() {
            const carElSection = document.createElement('div')
            const imageSection = document.createElement('div')
            const descrSection = document.createElement('div')
            const infoSection = document.createElement('div')
            
            carElSection.className ='car__item'
            carElSection.setAttribute('carId', this.carData.id)
            imageSection.className = 'car__header'
            imageSection.append(this.createImageElement())
            carElSection.append(imageSection)
            descrSection.className = 'car__body'
            infoSection.classList.add('car__info', 'info-car')
            infoSection.append(this.createYearElement(),this.createPriceElement())
            descrSection.append(this.createTitleElement(),infoSection)
            carElSection.append(descrSection)

            return carElSection
        }
    }

    class CarsList {
        constructor(carsData, parentContainer) {
            this.carsData = [...carsData]
            this.parentContainer = parentContainer
            this.carsBrandSort()
            this.render()
        }

        carsBrandSort() {
            this.carsData.sort((a, b) => {
                const brandSort = a.brand.localeCompare(b.brand, undefined, {sensitivity: 'base'})
                if (brandSort !== 0) return brandSort
                return a.model.localeCompare(b.model, undefined, {sensitivity: 'base'})
            })

            return this.carsData
        }

        createCarsSection() {
            const carsSection = document.createElement('div')
            carsSection.className = 'car__list'

            for (const carData of this.carsData) {
                const car = new Car(carData)
                carsSection.append(car.render())
            }

            return carsSection
        }

        update(carsData) {
            this.carsData = [...carsData]
            this.render()
        }

        render() {
            const carsContainer = document.querySelector(this.parentContainer)

            carsContainer.innerHTML = ''
            carsContainer.append(this.createCarsSection())

            return carsContainer
        }
    }

    class CarsFilter {
        constructor(carsData, parentElement){
            this.carsData = [...carsData]
            this.parentElement = parentElement
            this.brandSelect = null
            this.yearSelect = null
            this.render()
        }

        carsDataSort(data) {
            data.sort((a, b) => {
                if(typeof a === 'number') return a - b
                if(typeof a === 'string') return a.localeCompare(b, undefined, {sensitivity: 'base'})
            })

            return data
        }

        createOptionsSelect(value) {
            const unicValue = [...new Set(value)]
            const sortUnicValue = this.carsDataSort(unicValue)
               
            return sortUnicValue.map((value) => {
                const optionEl = document.createElement('option')
                optionEl.value = value
                optionEl.textContent = value
                return optionEl
            })
        }

        createSelectBrand() {
            const brandSelect = document.querySelector('.model__select')
            const brands = cars.map(({ brand }) => brand)
            const brendOptions = this.createOptionsSelect(brands)

            brendOptions.forEach(option => brandSelect.append(option))

            return brandSelect
        }

        createSelectYear() {
            const yearSelect = document.querySelector('.year__select')
            const years = cars.map(({ year }) => year)
            const yearOptions = this.createOptionsSelect(years)

            yearOptions.forEach(option => yearSelect.append(option))

            return yearOptions
        }

        filterCars(carsListInstance) {
            const brandSelect = document.querySelector('.model__select')
            const yearSelect = document.querySelector('.year__select')
            const filterContainer = document.querySelector(this.parentElement)

            filterContainer.addEventListener('change', (e) => {
                const selectedBrand = brandSelect.value
                const selectedYear = yearSelect.value

                const filteredCars = this.carsData.filter(car => {
                    const brandMatch = !selectedBrand || car.brand === selectedBrand
                    const yearMatch = !selectedYear || car.year === Number(selectedYear)
                    return brandMatch && yearMatch
                })
                carsListInstance.update(filteredCars)

                if (e.target === brandSelect) {
                    const filteredYears = this.carsData
                        .filter(car => !selectedBrand || car.brand === selectedBrand)
                        .map(car => car.year)
                    this.updateSelectOptions(yearSelect, filteredYears)
                }

                if (e.target === yearSelect) {
                    const filteredBrands = this.carsData
                        .filter(car => !selectedYear || car.year === Number(selectedYear))
                        .map(car => car.brand)
                    this.updateSelectOptions(brandSelect, filteredBrands)
                }
            })
        }

        updateSelectOptions(selectEl, values) {
            selectEl.innerHTML = '<option value="">All</option>'
            const options = this.createOptionsSelect(values)
            options.forEach(opt => selectEl.append(opt))
        }

        render() {
            this.createSelectBrand()
            this.createSelectYear()
        }
    }

    window.addEventListener('load', () => {
        const carsList = new CarsList(cars, '.car')
        const sortedCarsList = carsList.carsBrandSort()
        const carFilter = new CarsFilter(sortedCarsList, '.filter')
        carFilter.filterCars(carsList)
    })
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}