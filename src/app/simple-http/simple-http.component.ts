import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { SimpleHttpService } from '../simple-http.service'

@Component({
  selector: 'app-simple-http',
  template: `
    <h2>Basic Request</h2>
    <div *ngIf="loading">loading...</div>
    <p>{{data|json}}<p>
 `,
  styleUrls: ['./simple-http.component.css'],
})
export class SimpleHttpComponent implements OnInit {
  data:Object;
  loading:Boolean;

  constructor(private http:Http, private httpService:SimpleHttpService) {
    this.http = http;
   }

  ngOnInit() {
    this.httpService.makeRequest().subscribe(data =>this.data = data);

  }
}
