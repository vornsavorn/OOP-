abstract class Animal {
    constructor(private name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract playSound (sound: string): void;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}