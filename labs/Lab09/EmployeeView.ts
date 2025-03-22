import Employee from "./Employee";
import FTEEmployee from "./FTEEmployee";
import ContractEmployee from "./ContractEmployee";
import EmployeeController from "./EmployeeController";

let Hoa=new FTEEmployee("Hoa");
let Huyen=new FTEEmployee("Huyen");
let Thao=new ContractEmployee("Thao");
let Hanh=new ContractEmployee("Hanh");
let employeeCtroller=new EmployeeController();
let employeeList=[Hanh,Hoa,Huyen,Thao];

let total:number=employeeCtroller.getTotalSalary(employeeList);
console.log("Tong luong la: "+total);

let theBestemployee=employeeCtroller.getBestSalary(employeeList);
console.log("Nhan vien co luong cao nhat la: " +theBestemployee.getName());

let theLowestEm=employeeCtroller.getLowestsalary(employeeList);
console.log("Nhan vien co luong thap nhat la: " +theLowestEm.getName());


employeeCtroller.SortbyASC(employeeList);
employeeCtroller.SortbyDSC(employeeList);

