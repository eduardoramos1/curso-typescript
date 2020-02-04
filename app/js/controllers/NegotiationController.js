class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negociacoesView");
        this._mensagemView = new MessageView("#mensagemView");
        this._inputDate = $("#data");
        this._inputAmount = $("#quantidade");
        this._inputValue = $("#valor");
        this._negotiationsView.update(this._negotiations);
    }
    add(ev) {
        ev.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.val().replace(/-/g, ",")), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._mensagemView.update("Negociação adicionada!");
    }
}
