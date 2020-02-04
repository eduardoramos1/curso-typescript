class Negotiations {
  // array do tipo Negotiation
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return [...this._negotiations];
  }
}
