import { Header } from "../components/Header.js"
import { DogsManager } from "./DogsManager.js"
import { DogDetail } from "../components/DogDetail.js"
import {Footer} from "../components/Footer.js"

document.addEventListener('DOMContentLoaded', async () => {
    const gallery = document.getElementById('gallery')

    if (gallery) {
        const header = new Header()
        const footer = new Footer()
        
        await DogsManager.create()
        gallery.prepend(header.render())
        gallery.appendChild(footer.render())
    }

    const dog = document.getElementById('dog')

    if (dog) {
        const header = new Header()
        const footer = new Footer()
        const dogDetail = new DogDetail()

        dogDetail.render()
        dog.prepend(header.render())
        dog.appendChild(footer.render())
    }
})