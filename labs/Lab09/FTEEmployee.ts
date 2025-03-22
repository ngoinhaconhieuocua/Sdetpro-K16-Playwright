import Employee from "./Employee";

export default class FTEEmployee extends Employee {
    constructor(name:string) {
        super(50000,name);

       }
    getSalary(): number {
        return this.salary;
    }
}