import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaWebService } from '../../triviaplayer.service';


@Component({
    selector: 'app-testlogin',
    templateUrl: './testlogin.component.html',
    styleUrls: ['./testlogin.component.css']
  })
  export class TestLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(private triviaservice: TriviaWebService) {}

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
      },
        error => {alert(JSON.parse(error._body).error);console.log(JSON.parse(error._body).error)},
        () => console.log('Finished'),
        
    );
   // this.loading = true;
   // this.authenticationService.login(this.model.username, this.model.password);
  }

  }
