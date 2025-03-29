import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingACC = new SavingAccount("SavingACC", 1000);
console.log("Thong tin tai khoan BankingAccount: " + savingACC.getBalance());
console.log("Nap tien 100"); savingACC.deposit(100);
console.log("So du trong tai khoan: " + savingACC.getBalance());
console.log("Thuc hien rut tien 100"); savingACC.withdraw(100);
console.log("So du trong tai khoan: " + savingACC.getBalance());

let checkingACC = new CheckingAccount("CheckingAcc")
console.log("Thong tin tai khoan CheckingAccount: " + checkingACC.getBalance());
console.log("Nap tien 100"); checkingACC.deposit(100);
console.log("So du trong tai khoan: " + checkingACC.getBalance());
console.log("Thuc hien rut tien 110"); checkingACC.withdraw(110);
console.log("So du trong tai khoan : " + checkingACC.getBalance());

