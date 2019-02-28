import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  url:string = "https://my-json-server.typicode.com/imhimanshoe/demo/allmovies";
  movies:Movie[]=[];

  constructor(private httpClient:HttpClient) { 
    
  }
  
  getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url);     
  }  
}
