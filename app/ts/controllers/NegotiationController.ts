class NegotiationController {
  private _inputDate;
  private _inputAmount;
  private _inputValue;

  constructor() {
    this._inputDate = document.getElementById("data");
    this._inputAmount = document.getElementById("quantidade");
    this._inputValue = document.getElementById("valor");
  }

  add(ev) {
    ev.preventDefault();

    const negotiation = new Negotiation(
      this._inputDate.value,
      this._inputAmount.value,
      this._inputValue.value
    );

    console.log(negotiation);
  }
}
