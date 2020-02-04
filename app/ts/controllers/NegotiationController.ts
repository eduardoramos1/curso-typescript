class NegotiationController {
  private _inputDate: JQuery;
  private _inputAmount: JQuery;
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView");
  private _mensagemView = new MessageView("#mensagemView");

  constructor() {
    this._inputDate = $("#data");
    this._inputAmount = $("#quantidade");
    this._inputValue = $("#valor");
    this._negotiationsView.update(this._negotiations);
  }

  add(ev: Event) {
    ev.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputDate.val().replace(/-/g, ",")),
      parseInt(this._inputAmount.val()),
      parseFloat(this._inputValue.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._mensagemView.update("Negociação adicionada!");
  }
}
