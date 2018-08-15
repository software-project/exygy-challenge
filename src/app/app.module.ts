import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './browse/search/search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse',      component: BrowseComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false }
    )

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
