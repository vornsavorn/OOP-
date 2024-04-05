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

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    playSound(sound: string): void {
        console.log(sound);
    }

    eat(fruit: string): string {
        return " Cat eat " + fruit;
    }
}

let dog1 = new Dog("Nano");
console.log("Dog Name:", dog1.getName());
dog1.playSound("Woesh Woesh");
console.log(dog1.eat("Arch"));


let cat1 = new Cat("k'Mew");
console.log("Cat Name:", cat1.getName());
cat1.playSound("Meow Meow");
console.log(cat1.eat("Apple"));