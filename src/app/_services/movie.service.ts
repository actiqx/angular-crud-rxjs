import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class MovieService {
  movieList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private showsUrl = 'https://api.tvmaze.com/shows';
  constructor(private http: HttpClient) {

    this.showList()
  }
  showList() {
    this.http.get<any[]>(this.showsUrl).subscribe(data => {
      data.map(item => {
        return item.image.medium = item.image.medium.replace("http", "https");
      })
      this.movieList.next(data);
    });

  }
  setmoviesList(data: any) {
    this.movieList.next(data);
  }
  movieListUnsubscribe() {
    this.movieList.unsubscribe();
  }
  getmoviesList(): Observable<any> {
    return this.movieList.asObservable();
  }
}