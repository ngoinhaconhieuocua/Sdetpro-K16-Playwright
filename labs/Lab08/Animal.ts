export default class Animal {
    protected speed: number;
    protected name: string

    protected constructor(speed: number) {
        this.speed = speed;

    }
    getSpeed() {
        return this.speed;
    }
    getName() {
        return this.name;
    }

}