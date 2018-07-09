import {Component, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {Account} from "./account.model"
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'accounts_list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ["app/account/accounts_list.component.css"]
})
@NgModule({
  imports: [BrowserModule],
  declarations: [Account,AccountsList],
  bootstrap:[Account,AccountsList],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AccountsList{
  get account(): Array<Account> {
    return this._account;
  }
  set account(value: Array<Account>) {
    this._account = value;
  }

  private _selected: Array<Boolean> = [false, false];

  private _account:Array<Account> = [
    {
      id:1,
      title:"X Bank",
      description:"This is my main bank account.",
      balance:532
    },
    //  alternatively
    new Account(2, "Y Bank", "My secret account.", 1024)

  ];

  private removeAcc(index:number){
    this._account.splice(index, 1)
    this._selected.splice(index,1)
  }

  private select(index:number){
    this._selected[index] = !this._selected[index]
  }

}


