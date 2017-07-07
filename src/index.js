//@flow

let prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15
};


export default class Main {
    total: number;
    rules: Object;
    items: string[];

    constructor(rules: Object) {
        this.total = 0;
        this.rules = rules;
        this.items = [];
    }

    scan(item: string) {
        this.items.push(item);

        if(this.isMultibuySale(item)) {
            this.total = this.generateMultibuyPrice(item);
        } else {
            this.total += prices[item];
        }
    }

    isMultibuySale(item: string): boolean {
        let saleQuantity = this.rules[item][0];
        return this.getItemAmountInList(item) == saleQuantity;
    }

    getItemAmountInList(item: string): number {
        return (this.items.join('').match(new RegExp(`${item}`, "g")) || []).length;
    }

    generateMultibuyPrice(item: string): number {
        let priceBeforeSale = (this.rules[item][0] - 1);
        let salePrice = this.rules[item][1];

        return (this.total - (priceBeforeSale * prices[item])) + salePrice;
    }
}
