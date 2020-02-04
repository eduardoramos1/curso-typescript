class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._inputDate = document.getElementById("data");
        this._inputAmount = document.getElementById("quantidade");
        this._inputValue = document.getElementById("valor");
    }
    add(ev) {
        ev.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiations.toArray().length = 0;
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.amount);
            console.log(negotiation.date);
            console.log(negotiation.value);
        });
    }
}
