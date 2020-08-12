
export class BaseElement {
  constructor() {
    this.element = null;
  }

  appendToElement(el) {
    this.createElement();
    el.insertAdjacentHTML("beforeend", this.element);
  }
  createElement() {
    let s = this.getElementString();
    this.element = s;
  }
  getElementString() {
    throw "please override getElementString() from base class";
  }
}
