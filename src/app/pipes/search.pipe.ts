import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( movies: any[], terms: string): any {
    // if (terms == undefined ) {
    //   return movies;
    // }
    // return movies.filter((movies: any[]) => {
    //   return movies.title.toLowerCase().includes(terms.toLowerCase());

    // });

  }




}
