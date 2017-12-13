import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;



  constructor(
    private AuthenticationService
  ) { }

  ngOnInit() {
   //  this.AuthenticationService.logout();
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

login(){
  this.loading = true;
  //this.AuthenticationService.login(this.model.username, this.model.password)
      
}


}
