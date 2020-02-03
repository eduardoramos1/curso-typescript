class NegotiationController {
    constructor() {
        this._inputDate = document.getElementById("data");
        this._inputAmount = document.getElementById("quantidade");
        this._inputValue = document.getElementById("valor");
    }
    add(ev) {
        ev.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        console.log(negotiation);
    }
}
