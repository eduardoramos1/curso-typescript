declare var $: any;
// <T> é uma convenção para dizer que o tipo de algo é generico
abstract class View<T> {
  protected _element: any;

  constructor(selector: string) {
    this._element = $(selector);
  }

  update(model: T) {
    this._element.html(this.template(model));
  }

  abstract template(model: T): string;
}
