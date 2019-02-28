import { Component, OnInit } from '@angular/core';
import {MovieDataService} from "../movie-data.service"
import  { Movie } from "../movie"
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

movies:Movie[] = [];
  constructor(private movieData :MovieDataService) { }

  ngOnInit() {
    this.movieData.getMovies().subscribe(
      data=>{
          this.movies = data;
      },
      err =>{
        console.log("error in fetching data from :" + err.url);
      }
    )
  }

}
