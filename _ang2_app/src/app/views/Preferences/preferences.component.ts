import { Component, OnInit } from '@angular/core';
import { TriviaWebService } from '../../modules/opentdb/triviaplayer.service';
import { Globals } from '../../globals';
declare var $: any;


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(private triviaservice: TriviaWebService, private globals: Globals) { }

  ngOnInit() {
	$(".center-logo").show();
	$(".jumbotron").show();
  }

  logoutClick() {
    console.log('I click logout');
    this.triviaservice.logout();
  }

}
