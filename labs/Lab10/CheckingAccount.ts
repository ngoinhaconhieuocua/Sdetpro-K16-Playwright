import BankingAccount from "./BankingAccount";
export default class CheckingAccount extends BankingAccount {

    constructor(accountNumber: string, balance: number) {
        super(accountNumber, balance);

    }
    deposit(amount: number): void {
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

