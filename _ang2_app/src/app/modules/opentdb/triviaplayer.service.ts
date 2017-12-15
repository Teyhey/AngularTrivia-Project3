import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TriviaWebService {
  baseUri: string;
  fullUrl: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

  getTopScores(cat, diff, numQ) {
    this.fullUrl = this.baseUri + 'api/score/top?category=' + cat + '&difficulty=' + diff + '&numQuestions=' + numQ;
    return this. http.get(this.fullUrl)
    .map(res => res.json());
  }

  login(username: string, password: string) {
    this.fullUrl = this.baseUri + 'api/auth/login';
    return this.http.post(this.fullUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
    .map((response: Response) => {
     const user = response.json();
     console.log(response.json());
     console.log(user.user['username']);
     if (user && user.token) {
       localStorage.setItem('userToken', user.token);
       localStorage.setItem('username', user.user['username']);
       alert('You are now logged in');
       console.log('WORKED');
       console.log(user.token);
       console.log((localStorage.getItem('userToken')));
      }
    });
  }

  register(username: string, password: string) {
    this.fullUrl = this.baseUri + 'api/auth/register';
    return this.http.post(this.fullUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
    .map((response: Response) => {
     console.log(response.json());
     console.log('USER CREATED');
    });
  }

  submitScore(score: number, cat: string, diff: string, numQ: number) {
    console.log('submit Score was called');
    this.fullUrl = this.baseUri + 'api/score/submit';
    return this.http.post(this.fullUrl,
      JSON.stringify({score: score, category: cat, difficulty: diff, numQuestions: numQ}),
      {headers: new Headers({'content-Type': 'application/json', 'Authorization': (localStorage.getItem('userToken'))})})
    .map((response: Response) => {
     console.log('SCORE SENT');
     alert('Your score has been submitted!');
    });
  }

  getFriends() {
    console.log('Getting friends');
    this.fullUrl = this.baseUri + 'api/friend/getfriends';
    return this. http.get(this.fullUrl,
      {headers: new Headers({'content-Type': 'application/json', 'Authorization': (localStorage.getItem('userToken'))})})
    .map(res => res.json());
  }

  getFriendsRequests() {
    console.log('Getting friend requests');
    this.fullUrl = this.baseUri + 'api/friend/getpendingrequests';
    return this. http.get(this.fullUrl,
      {headers: new Headers({'content-Type': 'application/json', 'Authorization': (localStorage.getItem('userToken'))})})
    .map(res => res.json());
  }

  sendRequest(friendtobe: string) {
    console.log('Getting friend requests');
    this.fullUrl = this.baseUri + 'api/auth/sendRequest';
    return this.http.post(this.fullUrl, JSON.stringify({recipient: friendtobe}),
    {headers: new Headers({'content-Type': 'application/json', 'Authorization': (localStorage.getItem('userToken'))})})
    .map((response: Response) => {
     console.log(response.json());
     console.log('Request Send');
     alert('Request to ' + friendtobe + ' sent');
    });

  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
  }
}
