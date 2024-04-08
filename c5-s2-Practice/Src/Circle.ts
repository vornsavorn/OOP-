const PI = 3.14;
import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor (
        leftX : number,
        bottomY : number,
        public radius : number
    ) {
        super(leftX, bottomY);
        this.radius = radius;
    }

    getWidth(): number {
        return this.radius * this.radius;
    }

    getHeight(): number {
        return this.getWidth() * this.getWidth();
    }

    getArea(): number {
        return PI * this.radius * this.radius;
    }
}