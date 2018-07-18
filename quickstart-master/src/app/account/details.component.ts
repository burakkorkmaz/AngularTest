import {Component, OnDestroy, OnInit} from "@angular/core";
import {Account} from "./account.model";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "./account.services";
import {TransactionService} from "../transaction/transaction.service";
import {Transaction} from "../transaction/transaction.model";

@Component({
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})

export class DetailsComponent implements OnInit, OnDestroy{

  private _account:Account;
  private _error:String = "";
  private _paramSub:any;
  private _trans:Array<Transaction>;

  constructor(private _route:ActivatedRoute,
              private _accountService:AccountService,
              private _transactionService:TransactionService){

  }

  public ngOnInit(){
    this._paramSub = this._route.params.subscribe(params =>{
      let id:number = + params['id'];

      this._account = null;
      this._error = "";
      this._accountService.getById(id)
          .then( (account:Account) => this._account = account)
          .catch(err => this._error = err);
      this._transactionService.getByAccount(id)
        .then(trans => this._trans = trans);
    });
  }
  public ngOnDestroy(){
    this._paramSub.unsubscribe();
  }

}
