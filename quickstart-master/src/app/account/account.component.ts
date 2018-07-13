import {Component} from '@angular/core';
import {ACCOUNT_SERVICE_PROVIDERS, AccountService} from "./account.services";

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls: ['app/account/account.component.css'],
  // providers: [AccountService, LoggerService]
  providers: [ACCOUNT_SERVICE_PROVIDERS]
// styles: ['.blue-bg{background-color: cyan;}']
})

export class AccountComponent {

}
