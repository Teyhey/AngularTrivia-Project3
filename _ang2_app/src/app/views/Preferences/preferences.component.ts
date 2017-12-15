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

  model: any = {};
  username = (localStorage.getItem('username'));
  friends;

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

  iWantFriends() {
    this.triviaservice.getFriends().subscribe(
      data => {
        this.friends = data['result'];
      },
      error => alert(error),
      () => console.log('Finished')
    );
  }

  sendFriendRequest() {
    this.triviaservice.sendRequest(this.model.newFriend).subscribe(
      data => {
        console.log('Friend request pending');
      },
        error => {
          alert(JSON.parse(error._body).error);
          console.log(JSON.parse(error._body).error); },
        () => console.log('Finished'),
    );
  }

}
