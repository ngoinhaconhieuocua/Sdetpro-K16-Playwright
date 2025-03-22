import Employee from "./Employee";
export default class EmployeeController {
    getTotalSalary(employeeList: Employee[]): number {
        let totalSalary: number = 0;
        employeeList.forEach(employee => {
            totalSalary = totalSalary + employee.getSalary();
        });
        return totalSalary;

    }
    getBestSalary(employeeList: Employee[]): Employee {

        let theBestEmployee = employeeList[0];
        employeeList.forEach(employee => {
            if (theBestEmployee.getSalary() < employee.getSalary())
                theBestEmployee = employee;

        });
        return theBestEmployee;

    }
    getLowestsalary(employeeList: Employee[]): Employee {

        let lowestSalaryEmployee = employeeList[0];
        employeeList.forEach(employee => {
            if (lowestSalaryEmployee.getSalary() > employee.getSalary())
                lowestSalaryEmployee = employee;
        });
        return lowestSalaryEmployee;
    }
    PrintEmployeeList(employeeList: Employee[]) {
       // console.log("----------------DS nhan vien ---------------");
        employeeList.forEach(emp => {
            console.log(emp.getName() + " with salary:" + emp.getSalary());

        });
    }
    SortbyASC(employeList: Employee[]): void {
        employeList.sort((emp, emp2) => emp.getSalary() - emp2.getSalary());
        console.log("Sắp xếp theo thự tự tăng dần ");
        this.PrintEmployeeList(employeList);

    }
    SortbyDSC(employeList: Employee[]): void {
        employeList.sort((emp, emp2) => emp2.getSalary() - emp.getSalary());
        console.log("Sắp xếp theo thự tự giảm dần ");
        this.PrintEmployeeList(employeList);

    }




}
