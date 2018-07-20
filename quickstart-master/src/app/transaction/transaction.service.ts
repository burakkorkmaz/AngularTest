import {Injectable} from "@angular/core";
import {Transaction} from "./transaction.model";

@Injectable()
export class TransactionService {
  private  _transactions:Array<Transaction> = [
    {
      id: "1",
      value: 150,
      description: "Invested money",
      date: new Date(2018,6,24,14,32,58),
      tags: ["invest"],
      accountId:1,
    },
    {
      id: "2",
      value: -50,
      description: "Withdrawn money",
      date: new Date(2018,7,1,13,4,43),
      tags: ["withdraw"],
      accountId:1,
    },
    {
      id: "3",
      value: -124.32,
      description: "Paid bills",
      date: new Date(2018,7,10,16,55,22),
      tags: ["bill","electricity"],
      accountId:1,
    }
  ];

  public getByAccount(accountId:number):Promise<Array<Transaction>> {
    return new Promise((resolve, reject) => {
      resolve(this._transactions.filter(tran => tran.accountId == accountId))

    });
  }

}

export const TRANSACTION_SERVICE_PROVIDERS:Array<any> = [TransactionService];

