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
        this.PrintEmployeeList(employeeList);
        let theBestEmployee = employeeList[0];
        employeeList.forEach(employee => {
            if (theBestEmployee.getSalary() <employee.getSalary())
                theBestEmployee = employee;

        });
        return theBestEmployee;

    }
    getLowestsalary(employeeList: Employee[]): Employee {
        this.PrintEmployeeList(employeeList);
        let lowestSalaryEmployee = employeeList[0];
        employeeList.forEach(employee => {
            if (lowestSalaryEmployee.getSalary() > employee.getSalary())
                lowestSalaryEmployee = employee;
        });
        return lowestSalaryEmployee;
    }
    PrintEmployeeList(employeeList: Employee[]) {
        console.log("----------------DS nhan vien ---------------");
        employeeList.forEach(emp => {
            console.log(emp.getName() + " with salary:" + emp.getSalary());

        });
    }


}
