import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Account} from "./account.model"

@Component({
  selector: 'accounts_list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ["app/account/accounts_list.component.css"]
})

export class AccountsList implements OnInit{
  ngOnInit(): void {
    console.log("success");
  }
  // get account(): Array<Account> {
  //   return this._account;
  // }
  // set account(value: Array<Account>) {
  //   this._account = value;
  // }

  private _selected: Array<Boolean> = [false, false];


  @Input ('accounts') _account:Array<Account>;
  @Output ('delete') delete = new EventEmitter<number>();

  private selected(index:number){
    this._selected[index] = !this._selected[index]
  }

  private _remove(index:number){
    this.delete.emit(index);
    this._selected.splice(index);
  }

  @Output() details = new EventEmitter<Account>();

  private _showDetails(account:Account){
    this.details.emit(account);
  }
}


