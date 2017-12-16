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
  friendarray;
  friendview = [];
  friendlength = 0;
  currentpage = 1;
  friendcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit() {
	$(".center-logo").show();
  $(".jumbotron").show();
  
  this.triviaservice.getFriends().subscribe(
    data => {
      this.friendarray = data['result'];
      let i = 0;
      this.friendlength = data['result'].length;
      while ((i < 10) && (i < this.friendlength)) {
        this.friendview[i] = data['result'][i];
        i = i + 1;
      }
    },
    error => alert(error),
    () => console.log('Finished')
  );
  }

  nextTenFriends() {
    if (this.checklarger()) {
      this.currentpage = this.currentpage + 10;
      let i = this.currentpage - 1;
      let j = 0;
      let k = 0;
      while ((i < (this.currentpage + 9)) && (i < this.friendlength)) {
        this.friendview[j] = this.friendarray[i];
        i++;
        j++;
      }
      while (k < (this.currentpage + 9)) {
        this.friendcount[k] = this.friendcount[k] + 10;
        k++;
      }
    } else {
      console.log('Not enough friends');
    }
  }

  previousTenFriends() {
    if (this.checksmaller()) {
      this.currentpage = this.currentpage - 10;
      let i = this.currentpage - 1;
      let j = 0;
      while ((i < (this.currentpage + 9)) && (i < this.friendlength)) {
        this.friendview[j] = this.friendarray[i];
        i++;
        j++;
      }
    } else {
      console.log('Can not go further back');
    }
  }

  checklarger() {
    if ((this.currentpage + 10) > this.friendlength) {
      return false;
    } else {
      return true;
    }
  }

  checksmaller() {
    if ((this.currentpage - 10) < 0) {
      return false;
    } else {
      return true;
    }
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
