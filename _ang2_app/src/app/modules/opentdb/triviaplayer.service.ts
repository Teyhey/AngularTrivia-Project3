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

  getTopScores() {
    this.fullUrl = this.baseUri + 'api/score/top';
    return this. http.get(this.fullUrl)
    .map(res => res.json());
  }

  login(username: string, password: string) {
    this.fullUrl = this.baseUri + 'api/auth/login';
    return this.http.post(this.fullUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
    .map((response: Response) => {
     const user = response.json();
     console.log(response.json());
     if (user && user.token) {
       localStorage.setItem('userToken', user.token);
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
      JSON.stringify({score: score, category: cat, difficulty: diff, numQuestions: numQ,
        Authorization: (localStorage.getItem('userToken'))}), {headers: this.headers})
    .map((response: Response) => {
     console.log(response.json());
     console.log('SCORE SENT');
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
  }


  // getScores
  // /api/score/top
}
