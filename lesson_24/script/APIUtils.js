export class APIUtils {
    static async fetchData(url) {
        try {
            const response = await fetch(url)
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            return await response.json()
        } catch (error) {
            console.error('API Error', error)
            throw error
        }
    }

    static async fetchDogBreeds(url) {
        return this.fetchData('https://dog.ceo/api/breeds/list/all')
    }

    static async fetchRandomDog() {
        return this.fetchData('https://dog.ceo/api/breeds/image/random')
    }

    static async fetchDogByBreed(breed) {
        return this.fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    }

    static async fetchMultipleDogs(count = 10) {
        const promises = Array(count)
            .fill()
            .map(() => this.fetchRandomDog())
        return Promise.all(promises)
    }
}