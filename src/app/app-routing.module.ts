import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {AuthModule} from './auth/auth.module';
import {UserProfileComponent} from './components/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: '',
    redirectTo: '/leaderboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
