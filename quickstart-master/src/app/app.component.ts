import {Component, ViewChild} from '@angular/core';
import {Account} from "./account/account.model";
import {AccountForm} from "./account/account_form.component";
import {ACCOUNT_SERVICE_PROVIDERS, AccountService} from "./account/account.services";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  // providers: [AccountService, LoggerService]
  providers: [ACCOUNT_SERVICE_PROVIDERS]
// styles: ['.blue-bg{background-color: cyan;}']
})

export class AppComponent {

  private _account:Array<Account> = [];

  private _accountService:AccountService;

  constructor(accountService:AccountService){
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._account = accounts);
  }

  private createAccError:string = "";

  private createAcc(newAccount:Account){
    this._accountService.create(newAccount).then(account => {
    console.log(account);
    this.createAccError = "";
    this.form.resetForm()
    }).catch(err => this.createAccError = err);
  }

  private removeAcc(index:number){
    this._accountService.remove(index).then(account => console.log(account));
  }

  @ViewChild(AccountForm) form:AccountForm;
}
