import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

const API_KEY=environment.API_KEY;

const API_URL=environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {


  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get(`${API_URL}top-headlines?country=us&apiKey=${API_KEY}`)
  }
}
