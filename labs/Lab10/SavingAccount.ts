import BankingAccount from "./BankingAccount";
export default class SavingAccount extends BankingAccount {
    
    constructor(accountNumber: string, balance: number) {
        super(accountNumber, balance);
       
    }
    deposit(amount: number): void {
       this.balance= this.getBalance() + amount;
    }
    withdraw(amount: number): void {
       this.balance= this.getBalance() - amount;
    }
    getBalance(): number {
        return this.balance;
    }
    getAccountNumber(): string {
        return this.accountNumber;
    }
}