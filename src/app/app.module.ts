import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { MovieService } from './_services/movie.service'
import {MovieListComponent} from './movie-list/movie-list.component';
import { MovieListDetailsComponent } from './movie-list-details/movie-list-details.component';
import { MovieShowComponent } from './movie-show/movie-show.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AppRoutingModule,RouterModule,HttpClientModule ],
  declarations: [ AppComponent,MovieListComponent, MovieListDetailsComponent, MovieShowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
