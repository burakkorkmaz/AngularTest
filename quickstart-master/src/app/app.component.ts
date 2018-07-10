import {Component } from '@angular/core';

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


  private _nextID = 3;


  private static createAcc(titleEl:any, descEl:any, balEl:any){
    // this._account.push(new Account(this._nextID, titleEl.value, descEl.value, balEl.value));
    // this._nextID++;
    // this._selected.push(false)
    titleEl.value = "";
    descEl.value = "";
    balEl.value = 0
  }


}
