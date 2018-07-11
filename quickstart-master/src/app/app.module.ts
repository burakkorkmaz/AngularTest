import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AccountsList} from "./account/accounts_list.component";
import {AccountForm} from "./account/account_form.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AccountsList,AccountForm ],
  bootstrap:    [ AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
