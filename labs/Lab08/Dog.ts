import Animal from "./Animal";
export default class Dog extends Animal {
    name = "Dog";
    constructor(speed: number) {
        super(speed);

    }
    getName(): string {
        return this.name;
    }

}