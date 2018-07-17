import {Injectable} from "@angular/core";
import {Transaction} from "./transaction.model";

@Injectable()
export class TransactionService {
  private  _transactions:Array<Transaction> = [
    {
      id: "1",
      value: 150,
      description: "invest money",
      date: new Date(),
      tags: ["invest"],
      accountId:1,
    },
    {
      id: "2",
      value: -50,
      description: "Withdraw money",
      date: new Date(),
      tags: ["withdraw"],
      accountId:1,
    },
    {
      id: "3",
      value: -124.32,
      description: "paid bills",
      date: new Date(),
      tags: ["bill", "electricity"],
      accountId:1,
    }
  ];

  public getByAccount(accountId:number){}
}


