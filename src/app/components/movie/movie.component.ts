import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {

  movieIndex;

  movie: any = {};

  imgPrefix = 'https://image.tmdb.org/t/p/w500/';

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
    this.movieIndex = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.movieIndex).subscribe( (data) => {

      this.movie = data;
    });
   }



  ngOnInit() {


  }

}
