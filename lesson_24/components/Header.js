import { DOMUtils } from "../script/DOMUtils.js"

export class Header {
  constructor() {

  }

  render() {
    const header = DOMUtils.createElement('header', ['header'])
    const headerContainer = DOMUtils.createElement('div', ['header__container'])

    const logo = DOMUtils.createElement('a', ['logo'], '🐕 Dogs')
    logo.href = '/lesson_24/parts/dogs.html'

    DOMUtils.appendChild(headerContainer, [logo])
    header.appendChild(headerContainer)

    return header
  }
}