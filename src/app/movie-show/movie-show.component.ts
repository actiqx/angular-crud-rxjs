import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import {Movie} from '../movie-list/movie';
@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {
@Input() show:Movie;
@Output() onClicked= new EventEmitter<Movie>();
   constructor() { 
     
   }

  ngOnInit() {
  }
viewDetail() {
    console.log('view detail')
    this.onClicked.emit(this.show);
  }
}