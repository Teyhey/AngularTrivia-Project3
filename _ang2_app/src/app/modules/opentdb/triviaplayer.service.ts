import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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


  // getScores
  // /api/score/top
}
