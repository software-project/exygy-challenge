import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './browse/search/search.component';
import { DocumentsListComponent } from './browse/documents-list/documents-list.component';
import { DocumentDetailsComponent } from './browse/document-details/document-details.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './users/login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsItemComponent } from './notifications/notifications-item.component';
import { NotificationService } from './notifications/notification.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse',      component: BrowseComponent },
  { path: 'profile',      component: ProfileComponent },
  { path: 'login',      component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    SearchComponent,
    DocumentsListComponent,
    DocumentDetailsComponent,
    ProfileComponent,
    LoginComponent,
    NotificationsComponent,
    NotificationsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false }
    )
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
