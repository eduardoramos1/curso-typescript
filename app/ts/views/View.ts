// <T> é uma convenção para dizer que o tipo de algo é generico
abstract class View<T> {
  protected _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: T) {
    this._element.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}
