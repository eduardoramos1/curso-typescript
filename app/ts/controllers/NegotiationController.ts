class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    this._inputDate = <HTMLInputElement>document.getElementById("data");
    this._inputAmount = <HTMLInputElement>document.getElementById("quantidade");
    this._inputValue = <HTMLInputElement>document.getElementById("valor");
  }

  add(ev: Event) {
    ev.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ",")),
      parseInt(this._inputAmount.value),
      parseFloat(this._inputValue.value)
    );

    console.log(negotiation);
  }
}
