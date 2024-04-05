abstract class Animal {
    constructor(private name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract playSound (sound: string): void;
    abstract eat(fruit: string): string;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    playSound(sound: string): void {
        console.log(sound);
        
    }
    eat(fruit: string): string {
        return " Dog eat " + fruit;
    }

}