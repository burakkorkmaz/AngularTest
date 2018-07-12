import {Injectable, Optional} from '@angular/core';
import {Account} from "./account.model";
import {LoggerService} from "../util/logger.service";

@Injectable()
export class AccountService {
  constructor(@Optional() private _logger:LoggerService){}

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
    if (this._logger) {
      this._logger.log('Account created: ' +  newAccount.title);
    }
    this._account.push(newAccount);
  }

  public remove(index:number){
    if (this._logger) {
      this._logger.log('Account deleted: ' + this._account[index].title);
    }
    this._account.splice(index);
  }
}

export const ACCOUNT_SERVICE_PROVIDERS:Array<any> = [AccountService, LoggerService];
