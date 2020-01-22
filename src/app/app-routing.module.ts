import { MoviesComponent } from './components/movies/movies.component';
import { TvsComponent } from './components/tvs/tvs.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { TvComponent } from './components/tv/tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tv/:id', component: TvComponent},
  {path: 'tvs', component: TvsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
