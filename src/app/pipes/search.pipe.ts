import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( movies, terms: string): any {
    if (terms == undefined ) {
      return movies;
    }
    return movies.filter((movies) => {
      if (movies.title == undefined) {

        return movies.name.toLowerCase().includes(terms.toLowerCase());
      }
      return movies.title.toLowerCase().includes(terms.toLowerCase());

    });

  }




}
