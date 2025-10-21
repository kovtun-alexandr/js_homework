import { DOMUtils } from "../script/DOMUtils.js";

export class Footer {
  constructor() {
  }

  render() {
    const footer = DOMUtils.createElement('footer', ['footer'])
    const footerContainer = DOMUtils.createElement('div', ['footer__container'])

    const copyright = DOMUtils.createElement(
      'p',
      ['footer__cotyright'],
      `© ${new Date().getFullYear()} Oleksander Kovtun.`
    )

    DOMUtils.appendChild(footerContainer, copyright)
    footer.appendChild(footerContainer)

    return footer
  }
}
