import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { UsersComponent } from './components/users/users.component';
import { PlayGroundComponent } from './utility/play-ground/play-ground.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: ManageUserComponent },
  { path: 'edit-user/:userName', component: ManageUserComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'about-app', component: AboutAppComponent },
  { path: 'play', component: PlayGroundComponent, 
    data: {isActive: true}, 
    //ToDo: Explore resolve example
    // resolve : {
    //   user: UserService
    // } 
  },
  { path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
