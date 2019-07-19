import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }

  searchMovies(keyword:String){
    console.log("Hello");
      return this.http.get<{Search:any}>("http://www.omdbapi.com/?s="+keyword+"&apikey=a48649b1");

  }
}
