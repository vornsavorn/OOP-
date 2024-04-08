import { Drink } from "./Drink";

export class OrangeJuice extends Drink {
	constructor(
        name: string = "OrangeJuice",
        price: number,
        private quantity : number
    ) {
        super(name, price);
        this.quantity = quantity;
    }
}