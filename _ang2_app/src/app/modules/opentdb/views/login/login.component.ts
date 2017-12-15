import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaWebService } from '../../triviaplayer.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(private triviaservice: TriviaWebService, private router: Router) {}

    ngOnInit() {
     //  this.AuthenticationService.logout();
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

  loginsubmit() {
    console.log('I pushed a button');
    console.log(this.model.username);
    this.triviaservice.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        console.log('I guess the data sent?');
        if (localStorage.getItem('userToken')) {
          this.router.navigate(['preferences']);
      }
      },
        error => {alert(JSON.parse(error._body).error); console.log(JSON.parse(error._body).error)},
        () => console.log('Finished'),
    );
   // this.loading = true;
   // this.authenticationService.login(this.model.username, this.model.password);
  }

  }
