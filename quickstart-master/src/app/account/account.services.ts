import {Injectable, Optional} from '@angular/core';
import {Account} from "./account.model";
import {LoggerService} from "../util/logger.service";
import {reject, resolve} from "q";

@Injectable()
export class AccountService {
  constructor(@Optional() private _logger:LoggerService){}

  private _account: Array<Account> = [
    {
    id: 1,
    title: "Global Bank",
    description: "Main bank account",
    balance: 456
    },
    {
      id: 2,
      title: "AkBank",
      description: "My private bank account",
      balance: 130
    }];

  public getAll():Promise<Array<Account>> {
    return Promise.resolve(this._account);
  }

  private _nextID = 3;
  private _accountLimit = 3;
  public create(newAccount: Account) {
    return new Promise((resolve,reject) => {
      if(this._account.length >= this._accountLimit){
        reject("Maximum accounts limit reached.");
        return;
      }

      newAccount.id = this._nextID++;
      if (this._logger) {
        this._logger.log('Account created: ' +  newAccount.title);
      }
      this._account.push(newAccount);

    })

  }

  public remove(index:number){
    return new Promise((resolve, reject) => {
      if (this._logger) {
        this._logger.log('Account deleted: ' + this._account[index].title);
        var deleted = this._account.splice(index,1);
        if (deleted.length == 0) {
          reject("No account here");
          return;
        }
      }
      resolve(deleted[0]);
    })

  }

  getById(accountId: number) {
    return new Promise((resolve, reject) => {
      var foundAcc = this._account.find(acc => acc.id == accountId);
      if (!foundAcc) {
        reject('No account with this ID.');
      }else {
        resolve(foundAcc);
      }
    });
  }
}

export const ACCOUNT_SERVICE_PROVIDERS:Array<any> = [AccountService, LoggerService];
