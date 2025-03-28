"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount_1 = require("./BankingAccount");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, balance) {
        return _super.call(this, accountNumber, balance) || this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance = this.getBalance() + amount;
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        if (this.getBalance() - amount < 50) {
            console.log("So du con lai khong du 50. Khong the rut tien");
        }
        else {
            this.balance = this.getBalance() - amount;
        }
    };
    CheckingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    CheckingAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    return CheckingAccount;
}(BankingAccount_1.default));
exports.default = CheckingAccount;
