import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from './movie';
import {MovieService} from '../_services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
shows: Movie[] = [];
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
    this.movieService.movieList.subscribe(data=>{
    this.shows=data;
    });
    console.log(this.shows.toString());
      
  }
gotoDetail(show: Movie): void {
    const link = ['/detail', show.id];
    this.router.navigate(link);
  }
}