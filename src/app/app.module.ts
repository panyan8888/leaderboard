import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {AuthInterceptorService} from './interceptor/auth-interceptor.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    HeaderComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
