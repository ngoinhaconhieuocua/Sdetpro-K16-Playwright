import Employee from "./Employee";

export default class ContractEmployee extends Employee
{
   
    constructor(name:string)
    {
        super(30000,name);
    }
    // getSalary(): number {
    //     return this.salary;
    // }
}