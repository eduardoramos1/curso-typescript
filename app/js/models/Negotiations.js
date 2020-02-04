class Negotiations {
    constructor() {
        // array do tipo Negotiation
        this._negotiations = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    toArray() {
        return [...this._negotiations];
    }
}
