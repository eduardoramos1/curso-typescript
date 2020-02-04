class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView");
  private _mensagemView = new MessageView("#mensagemView");

  constructor() {
    this._inputDate = <HTMLInputElement>document.getElementById("data");
    this._inputAmount = <HTMLInputElement>document.getElementById("quantidade");
    this._inputValue = <HTMLInputElement>document.getElementById("valor");
    this._negotiationsView.update(this._negotiations);
  }

  add(ev: Event) {
    ev.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ",")),
      parseInt(this._inputAmount.value),
      parseFloat(this._inputValue.value)
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._mensagemView.update("Negociação adicionada!");
  }
}
