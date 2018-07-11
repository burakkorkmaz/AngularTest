import {Injectable} from '@angular/core';
import {Account} from "./account.model";

@Injectable()
export class AccountService {
  private _account: Array<Account> = [
    {
    id: 1,
    title: "Global Bank",
    description: "Main bank account.",
    balance: 456
    },
    {
      id: 2,
      title: "Pacific Bank",
      description: null,
      balance: 130
    }];

  public getAll(): Array<Account> {
    return this._account;
  }


  private _nextID = 3;

  public create(newAccount: Account) {
    newAccount.id = this._nextID++;
    this._account.push(newAccount);
  }
}
