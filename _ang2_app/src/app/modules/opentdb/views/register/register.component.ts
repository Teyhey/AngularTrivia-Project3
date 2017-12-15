import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaWebService } from '../../triviaplayer.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    constructor(private triviaservice: TriviaWebService) {}

    ngOnInit() {
    }

    registerSubmit() {
        console.log('I pushed a button');
        this.triviaservice.register(this.model.username, this.model.password)
        .subscribe(
          data => {
            console.log('I guess the data sent?');
          },
            error => {alert(JSON.parse(error._body).error); console.log(JSON.parse(error._body).error)},
            () => console.log('Finished'),
        );
    }

  }
