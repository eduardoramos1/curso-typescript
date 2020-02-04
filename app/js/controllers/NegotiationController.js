class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negociacoesView");
        this._inputDate = document.getElementById("data");
        this._inputAmount = document.getElementById("quantidade");
        this._inputValue = document.getElementById("valor");
        this._negotiationsView.update(this._negotiations);
    }
    add(ev) {
        ev.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
    }
}
