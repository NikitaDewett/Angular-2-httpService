import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()
export class SimpleHttpService {

  constructor(private http:Http) { }
    
  makeRequest(){
  return this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  .map(data => data.json());
 }

}
