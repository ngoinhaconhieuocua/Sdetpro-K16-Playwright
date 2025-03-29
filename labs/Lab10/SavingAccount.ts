import BankingAccount from "./BankingAccount";
export default class SavingAccount extends BankingAccount {

    constructor(accountNumber: string, balance: number) {
        super(accountNumber, balance);

    }
    deposit(amount: number): void {
        if (amount < 0) {
            console.log("So tien nap vao khong hop le");
        }
        this.balance = this.getBalance() + amount;
    }
    withdraw(amount: number): void {
        if (this.getBalance() - amount < 0) {
            console.log("So du khong du de rut tien");
        }
        else
            this.balance = this.getBalance() - amount;
    }
    getBalance(): number {
        return this.balance;
    }
    getAccountNumber(): string {
        return this.accountNumber;
    }
}