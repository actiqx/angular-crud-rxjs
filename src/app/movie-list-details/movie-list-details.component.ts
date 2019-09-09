import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {MovieService} from '../_services/movie.service';
@Component({
  selector: 'app-movie-list-details',
  templateUrl: './movie-list-details.component.html',
  styleUrls: ['./movie-list-details.component.css']
})
export class MovieListDetailsComponent implements OnInit {
  showList:any;
  show:any;
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { 
      
    }

  ngOnInit() {
   this.movieService.movieList.subscribe(data=>{
        this.showList=data;
        this.show= this.showList.find(show=>{
          return show.id== this.route.snapshot.params.id})
      })
  }

}