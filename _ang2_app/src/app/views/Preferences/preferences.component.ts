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
  requestsent;
  requestpending;

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
    console.log(this.model.friendR);
    this.triviaservice.sendRequest(this.model.friendR).subscribe(
      data => {
        console.log('Friend request pending');
      },
        error => {
          alert(error);
          console.log(error); },
        () => console.log('Finished'),
    );
  }

  showRequests() {
    this.triviaservice.getFriendsRequests().subscribe(
      data => {
        console.log('Friend request pending');
        this.requestpending = data['pendingReceived'];
        this.requestsent = data['pendingSent'];

      },
        error => {
          alert(error);
          console.log(error); },
        () => console.log('Finished'),
    );
  }

}
