import {Component} from "@angular/core";
import {Account} from "./account.model"

@Component({
  selector: 'accounts_list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ["app/account/accounts_list.component.css"]
})

export class AccountsList{
  // get account(): Array<Account> {
  //   return this._account;
  // }
  // set account(value: Array<Account>) {
  //   this._account = value;
  // }

  private _selected: Array<Boolean> = [false, false];

  private _account:Array<Account> = [
    {
      id:1,
      title:"X Bank",
      description:"This is my main bank account.",
      balance:532
    },
    {
      id:2,
      title:"Y Bank",
      description:"My secret account.",
      balance:1024
    }
  ];

  private removeAcc(index:number){
    this._account.splice(index, 1);
    this._selected.splice(index,1);
  }

  private selected(index:number){
    this._selected[index] = !this._selected[index]
  }

}


