import {Component, EventEmitter, Output} from "@angular/core";
import {Account} from "./account.model";

@Component({
  selector: 'account-form',
  templateUrl: 'app/account/account_form.component.html',
  styleUrls: ['app/account/account_form.component.css']
})

export class AccountForm{

  @Output() created = new EventEmitter<Account>();

  private createAcc(titleEl:any, descEl:any, balEl:any){
    let newAccount: Account = new Account(0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);
    titleEl.value = "";
    descEl.value = "";
    balEl.value = 0
  }
}