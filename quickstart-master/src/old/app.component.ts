import {Component, ElementRef, ViewChild} from '@angular/core';
import {Account} from "../app/account/account.model";
import {AccountForm} from "../app/account/account_form.component";

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

  private createAccError:string = "";
  private accLimit:number = 3;
  private createAcc(newAccount:Account){
    this.createAccError = "";

    if (this._account.length < this.accLimit) {
      newAccount.id = this._nextID++;
      this._account.push(newAccount);

      this.form.resetForm()
    } else {
        this.createAccError = "Only " + this.accLimit + " account(s) allowed.";
    }
  }

  private removeAcc(index:number){
    this._account.splice(index, 1);
    // this._selected.splice(index,1);
  }

  @ViewChild(AccountForm) form:AccountForm;
}
