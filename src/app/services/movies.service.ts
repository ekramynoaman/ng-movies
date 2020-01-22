import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private httpClient: HttpClient) {}

  getAllTrending(pageNumber): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=a89003f92daf6d3dd33c519e6536632a&page=' + pageNumber);
  }

  // Get Movies
  getMovieById(movieId): Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a89003f92daf6d3dd33c519e6536632a&language=en-US`);
  }

  // Get Tv
  getTvById(tvId): Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=a89003f92daf6d3dd33c519e6536632a&language=en-US`);
  }



}
