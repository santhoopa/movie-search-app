import { MovieServiceService } from './movie-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Search-App';
    constructor(private service:MovieServiceService) { }
  moviesList;
  onSearch(key:String){
    this.moviesList=[];
    console.log(key);
    this.service.searchMovies(key).subscribe(res =>{
      console.log(res);
      this.moviesList=res.Search;
    });
  }
}
