import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  pageNumber = 1;

  allTrending: any;


// For Search
terms: string;


  imgPrefix = 'https://image.tmdb.org/t/p/w500/';

  constructor(private movies: MoviesService, private router: Router) {

    this.movies.getAllTrending(this.pageNumber).subscribe( data => {
      this.allTrending = data.results;

    });
  }

  getMediaType(type: string, id: number) {

      if (type === 'movie') {
        this.router.navigate(['/movie/' + id]);

      } else {
        this.router.navigate(['/tv/' + id]);
      }
  }




  pagination(num: number) {

    this.pageNumber = num;
    this.movies.getAllTrending(this.pageNumber).subscribe( data => {
      this.allTrending = data.results;

    });
  }

  pagePrevious() {
    this.pagination(this.pageNumber - 1);
  }

  pageNext() {
    this.pagination(this.pageNumber + 1);
  }



  ngOnInit() {
  }

}
