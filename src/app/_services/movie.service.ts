import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable()
export class MovieService {
  movieList:  Subject<any>;
  private showsUrl = 'https://api.tvmaze.com/shows';
  constructor(private http: HttpClient) { 
    this.movieList= new Subject<any>();
    this.getmovieList()
  }
   getmovieList() {
  return  this.http.get<any[]>(this.showsUrl).subscribe(data => {
      data.map(item=>{
       return item.image.medium= item.image.medium.replace("http", "https");
      })
      this.movieList.next(data);
    })
   

  }
}