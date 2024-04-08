import { Drink } from "./Drink";

export class Coffee extends Drink{
	constructor ( 
        name : string,
        price: number,
        private numberOfOrange : number
    ) {
        super(name, price);
        this.numberOfOrange = numberOfOrange;
    }
}