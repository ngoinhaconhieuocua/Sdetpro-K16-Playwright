import Animal from "./Animal";
export default class Horse extends Animal {
    name = "Horse";

    constructor(speed: number) {
        super(speed);
    }
    getName(): string {
        return this.name;
    }
}