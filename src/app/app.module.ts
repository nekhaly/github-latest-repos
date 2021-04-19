import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repoList/repoList.component';
import { RepoCardComponent } from './components/repoCard/repoCard.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StarsComponent } from './components/stars/stars.component';
import { TimeComponent } from './components/time/time.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoCardComponent,
    AvatarComponent,
    StarsComponent,
    IssuesComponent,
    TimeComponent,
   ],
  imports: [
    BrowserModule, HttpClientModule, AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
