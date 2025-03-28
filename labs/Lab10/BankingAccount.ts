export default abstract class BankingAccount{
    protected balance: number;
    protected accountNumber: string;
    constructor(accountNumber:string,balance: number)
    {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
    abstract getAccountNumber(): string;
    
}