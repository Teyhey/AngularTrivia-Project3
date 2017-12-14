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
    return this.http.post(this.fullUrl, {user: username, password: password})
    .map((response: Response) => {
     const user = response.json();
     console.log(response.json());
     if (user && user.token) {
       localStorage.setItem('currentUser', JSON.stringify(user));
       console.log('WORKED');
      }
    });
  }


  // getScores
  // /api/score/top
}
