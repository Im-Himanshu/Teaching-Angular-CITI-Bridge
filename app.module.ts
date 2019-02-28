import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {RouterModule, Routes} from '@angular/router';
const routes:Routes=[{
    path:"movie-list", component:MovieListComponent},{
    path:"detail/:id", component:MovieDetailComponent},{
    path:"", redirectTo:"movie-list", pathMatch:"full"}

];
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
