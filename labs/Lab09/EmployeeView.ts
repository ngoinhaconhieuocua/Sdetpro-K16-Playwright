import Employee from "./Employee";
import FTEEmployee from "./FTEEmployee";
import ContractEmployee from "./ContractEmployee";
import EmployeeController from "./EmployeeController";

let Hoa=new FTEEmployee("Hoa");
let Huyen=new FTEEmployee("Huyen");
let Thao=new ContractEmployee("Thao");
let employeeCtroller=new EmployeeController();

let total:number=employeeCtroller.getTotalSalary([Hoa,Thao,Huyen]);
console.log("Tong luong la: "+total);

let theBestemployee=employeeCtroller.getBestSalary([Hoa,Huyen,Thao]);
console.log("Nhan vien co luong cao nhat la: " +theBestemployee.getName());

let theLowestEm=employeeCtroller.getLowestsalary([Hoa,Huyen,Thao]);
console.log("Nhan vien co luong thap nhat la: " +theLowestEm.getName());

