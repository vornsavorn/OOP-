export class Shape {
    constructor(
        public leftX: number,
        public bottomY: number
    ) {
        this.leftX = leftX;
        this.bottomY = bottomY;
    }

    getWidth(): number {
        return this.leftX - this.bottomY;
    }

    getHeight(): number {
        return this.bottomY - this.leftX;
    }

    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}