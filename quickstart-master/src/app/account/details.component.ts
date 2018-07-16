import {Component, OnDestroy, OnInit} from "@angular/core";
import {Account} from "./account.model";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "./account.services";

@Component({
  templateUrl: "./details.component.html",
})

export class DetailsComponent implements OnInit, OnDestroy{

  private _account:Account;
  private _error:String = "";
  private _paramSub:any;

  constructor(private _route:ActivatedRoute, private _accountService:AccountService){

  }

  public ngOnInit(){
    this._paramSub = this._route.params.subscribe(params =>{
      let id:number = + params['id'];

      this._account = null;
      this._error = "";
      this._accountService.getById(id)
          .then(account => this._account = account )
          .catch(err => this._error = err);
    });
  }
  public ngOnDestroy(){
    this._paramSub.unsubscribe();
  }

}
