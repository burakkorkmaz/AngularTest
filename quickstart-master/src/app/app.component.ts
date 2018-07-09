import { Component } from '@angular/core';
import {Account} from "./account.model";

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{title}}</h1>`,
  templateUrl: 'app/app.component.html',
  // styles: ['.blue-bg{background-color: cyan;}']
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  private _selected: Array<Boolean> = [false, false];
  get account(): Array<Account> {
    return this._account;
  }

  set account(value: Array<Account>) {
    this._account = value;
  }

  private _account:Array<Account> = [
    {
      id:1,
      title:"Bank Xzy",
      description:"This is my main bank account.",
      balance:501.2
    },
      new Account(2, "Bank Asd", "My secret account.", 1024.10)
  ]

  private _nextID = 3

  private createAcc(titleEl:any, descEl:any, balEl:any){
    this._account.push(new Account(this._nextID, titleEl.value, descEl.value, balEl.value));
    this._nextID++;
    this._selected.push(false)
    titleEl.value = "";
    descEl.value = "";
    balEl.value = 0
}

  private removeAcc(index:number){
    this._account.splice(index, 1)
    this._selected.splice(index,1)
  }

  private select(index:number){
    this._selected[index] = !this._selected[index]
  }
}
