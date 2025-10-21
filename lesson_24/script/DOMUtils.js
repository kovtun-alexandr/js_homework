export class DOMUtils {
  static createElement(tag, classNames = [], content = '') {
    const element = document.createElement(tag)
    if (classNames) element.classList.add(...classNames)
    if (content) element.innerHTML = content
    return element
  }

  static appendChild(parent, child) {
    if (Array.isArray(child)) {
      child.forEach((c) => parent.appendChild(c))
    } else {
      parent.appendChild(child)
    }
  }

  static removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }
}