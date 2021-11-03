import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: ManageUserComponent },
  { path: 'edit-user/:userName', component: ManageUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
