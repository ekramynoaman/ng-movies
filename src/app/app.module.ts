import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './components/about/about.component';
import { TvsComponent } from './components/tvs/tvs.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchPipe } from './pipes/search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NotFoundComponent,
    NavbarComponent,
    ContactComponent,
    TvComponent,
    PeopleComponent,
    AboutComponent,
    TvsComponent,
    MoviesComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
