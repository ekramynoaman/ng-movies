import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvIndex;

  tv: any = {};

  imgPrefix = 'https://image.tmdb.org/t/p/w500/';

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
    this.tvIndex = this.route.snapshot.paramMap.get('id');
    this.movieService.getTvById(this.tvIndex).subscribe( (data) => {

      this.tv = data;
    });
   }



  ngOnInit() {


  }

}
