abstract class Animal {
    constructor(private name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}