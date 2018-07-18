import { Component } from '@angular/core';
import {disableDebugTools} from "@angular/platform-browser";
// import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{title}}</h1>`,
  templateUrl: 'app/app.component.html',
  styles: ['.blue-bg{background-color: cyan;}']
})

export class AppComponent  {
  private username:string = 'user1';
  private currUser:User = {username: "User One", email: "user1@test.com" }

  private hideEmail:boolean = false

  private toggle(){
    this.hideEmail = !this.hideEmail
}
  private isEmpty:boolean = true
  private fill(){
    this.isEmpty = !this.isEmpty
  }

  private users:Array<User> = [
    {username: "Angel" , email: "angel@app.com"},
    {username: "Barry" , email: "barry@app.com"},
    {username: "Casey" , email: "casey@app.com"},
    {username: "Dave" , email: "dave@app.com"}
  ]

private changeEmail(newMail:string){
  this.currUser.email = newMail
}

private keyPress(){
    // if(event.keyCode == 13)
      var inputElement = <HTMLInputElement>event.target
      this.changeEmail(inputElement.value)
}
  private disableInput:boolean = true

  private isDisable():boolean{
    return this.disableInput
  }

  private isBlueBg:boolean = true
  private bgColor:string = 'orange'
  private getUsername():string{

    return this.currUser.username
  }
}

  interface User{
    username:string,
    email:string
  }
