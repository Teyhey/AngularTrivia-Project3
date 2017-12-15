import { Component, OnInit } from '@angular/core';
import { TriviaWebService } from '../../modules/opentdb/triviaplayer.service';
import { Globals } from '../../globals';
// import { AuthenticationService } from '../services/index';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private globals: Globals, private triviaservice: TriviaWebService) {}
  /*
  constructor(
     private authenticationService: AuthenticationService,
	 private globals: Globals
  ) { }
  */

  ngOnInit() {
		$(".center-logo").show();
		$(".jumbotron").show();
   //  this.AuthenticationService.logout();
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

loginsubmit(usr, pw) {
  console.log('I pushed a button');
  this.loading = true;
  this.triviaservice.login(usr, pw)
  .subscribe(
    data => {
      console.log('I guess the data sent?');
    },
      error => alert(error),
      () => console.log('Finished')
  );
 // this.loading = true;
 // this.authenticationService.login(this.model.username, this.model.password);
}


}
