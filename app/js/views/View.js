// <T> é uma convenção para dizer que o tipo de algo é generico
class View {
    constructor(selector) {
        this._element = $(selector);
    }
    update(model) {
        this._element.html(this.template(model));
    }
}
