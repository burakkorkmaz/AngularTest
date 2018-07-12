import {Component, ElementRef, ViewChild} from '@angular/core';
import {Account} from "./account/account.model";
import {AccountForm} from "./account/account_form.component";
import {AccountService} from "./account/account.services";

@Component({
selector: 'my-app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css'],
// styles: ['.blue-bg{background-color: cyan;}']
})

export class AppComponent {

  private _account:Array<Account>;

  private _accountService:AccountService;

  constructor(accountService:AccountService){
    this._accountService = accountService;

    this._account = this._accountService.getAll();
  }

  private createAccError:string = "";

  private createAcc(newAccount:Account){
    this._accountService.create(newAccount);
    this.form.resetForm()
  }

  private removeAcc(index:number){
    this._accountService.remove(index);
  }

  @ViewChild(AccountForm) form:AccountForm;
}
