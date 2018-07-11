import {Component } from '@angular/core';
import {Account} from "./account/account.model";

/*describe('AccountsList',() => {
  let component: AccountsList;
  let fixture: ComponentFixture<AccountsList>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent, AccountsList],
      imports: [ BrowserModule, Account]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent((AccountsList));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});*/

@Component({
selector: 'my-app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css'],
// styles: ['.blue-bg{background-color: cyan;}']
})

export class AppComponent {

  private _account:Array<Account> = [
    {
      id:1,
      title:"X Bank",
      description:"This is my main bank account.",
      balance:532
    },
    {
      id:2,
      title:"Y Bank",
      description:"My secret account.",
      balance:1024
    }
  ];

  private _nextID = 3;

  private createAcc(newAccount:Account){
    newAccount.id = this._nextID++;
    this._account.push(newAccount);
  }

  private removeAcc(index:number){
    this._account.splice(index, 1);
    // this._selected.splice(index,1);
  }

}
