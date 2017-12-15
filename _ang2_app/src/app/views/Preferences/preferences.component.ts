import { Component, OnInit } from '@angular/core';
import { TriviaWebService } from '../../modules/opentdb/triviaplayer.service';
import { Globals } from '../../globals';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(private triviaservice: TriviaWebService, private globals: Globals, private router: Router) { }

  username = (localStorage.getItem('username'));

  ngOnInit() {
	$(".center-logo").show();
	$(".jumbotron").show();
  }

  logoutClick() {
    console.log('I click logout');
    this.triviaservice.logout();
  }

  reroute() {
    this.router.navigate(['home']);
    alert('You have logged out');
  }

}
