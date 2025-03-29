import BankingAccount from "./BankingAccount";
export default class CheckingAccount extends BankingAccount {

    constructor(accountNumber: string) {
        super(accountNumber, 50);

    }
    deposit(amount: number): void {
        if (amount < 0) {
            console.log("So tien ban nap vao khong hop le!");
        }
        this.balance = this.getBalance() + amount;
    }
    withdraw(amount: number): void {

        if (this.getBalance() - amount < 50) {
            console.log("So du con lai khong du 50. Khong the rut tien");
        }
        else {
            this.balance = this.getBalance() - amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
    getAccountNumber(): string {
        return this.accountNumber;
    }


}

