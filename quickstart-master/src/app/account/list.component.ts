import {Component} from "@angular/core";
import {Account} from "./account.model";
import {AccountService} from "./account.services";

@Component({
  templateUrl: 'app/account/list.component.html'
})

export class ListComponent {
  private _account:Array<Account> = [];

  private _accountService:AccountService;

  constructor(accountService:AccountService){
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._account = accounts);
  }
}
