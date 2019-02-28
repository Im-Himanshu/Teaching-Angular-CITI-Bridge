import { Component, OnInit } from '@angular/core';
import {MovieDataService} from '../movie-data.service'
import { Movie } from '../movie';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieDataService:MovieDataService, 
    private route:ActivatedRoute) { }
  movie:Movie;
  ngOnInit() {
    let id:number = +this.route.snapshot.paramMap.get("id");
    this.movie = 
      this.movieDataService.movies.find(x=>x.id==id);
  }

}
