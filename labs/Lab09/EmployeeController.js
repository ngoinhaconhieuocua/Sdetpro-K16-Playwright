"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.prototype.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        employeeList.forEach(function (employee) {
            totalSalary = totalSalary + employee.getSalary();
        });
        return totalSalary;
    };
    EmployeeController.prototype.getBestSalary = function (employeeList) {
        var theBestEmployee = employeeList[0];
        employeeList.forEach(function (employee) {
            if (theBestEmployee.getSalary() < employee.getSalary())
                theBestEmployee = employee;
        });
        return theBestEmployee;
    };
    EmployeeController.prototype.getLowestsalary = function (employeeList) {
        var lowestSalaryEmployee = employeeList[0];
        employeeList.forEach(function (employee) {
            if (lowestSalaryEmployee.getSalary() > employee.getSalary())
                lowestSalaryEmployee = employee;
        });
        return lowestSalaryEmployee;
    };
    EmployeeController.prototype.PrintEmployeeList = function (employeeList) {
        // console.log("----------------DS nhan vien ---------------");
        employeeList.forEach(function (emp) {
            console.log(emp.getName() + " with salary:" + emp.getSalary());
        });
    };
    EmployeeController.prototype.SortbyASC = function (employeList) {
        employeList.sort(function (emp, emp2) { return emp.getSalary() - emp2.getSalary(); });
        console.log("Sắp xếp theo thự tự tăng dần ");
        this.PrintEmployeeList(employeList);
    };
    EmployeeController.prototype.SortbyDSC = function (employeList) {
        employeList.sort(function (emp, emp2) { return emp2.getSalary() - emp.getSalary(); });
        console.log("Sắp xếp theo thự tự giảm dần ");
        this.PrintEmployeeList(employeList);
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
