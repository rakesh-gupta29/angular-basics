export class Stock {
  constructor(
    public name: string,
    public price: number,
    public code: string,
    public previousPrice: number,
    public id?: string,
    public isFav: boolean = false
  ) {}
  hasIncreased(): boolean {
    return this.price >= this.previousPrice;
  }
}
