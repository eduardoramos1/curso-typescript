// <T> é uma convenção para dizer que o tipo de algo é generico
class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
