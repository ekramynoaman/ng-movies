import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  pageNumber = 1;

  allTrending: any;


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
