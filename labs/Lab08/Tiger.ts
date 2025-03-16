import Animal from "./Animal";
export default class Tiger extends Animal {
    name = "Tiger";
    constructor(speed: number) {
        super(speed);
    }
    getName(): string {
        return this.name;
    }

}