import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";

import { AccountComponent }  from './account/account.component';
import {AccountsList} from "./account/accounts_list.component";
import {AccountForm} from "./account/account_form.component";
import {AccountService} from "./account/account.services";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./account/list.component";
import {CreateComponent} from "./account/create.component";
import {DetailsComponent} from "./account/details.component";

const appRoutes:Routes = [

  {path: '', component: HomeComponent},
  {path: 'accounts', component: AccountComponent,
    children:
      [ { path: 'list', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: '', pathMatch:'full', redirectTo:'list' },
        { path: ':id', component: DetailsComponent}]
  },

];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes, {enableTracing:true}), BrowserModule],
  declarations: [ AppComponent, HomeComponent, AccountComponent, AccountsList, AccountForm ,
    ListComponent, CreateComponent , DetailsComponent],
  bootstrap:    [ AppComponent],
  providers:    [ AccountService]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
