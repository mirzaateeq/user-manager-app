import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationHistoryComponent } from './location-history/location-history.component';
import { UserLocationComponent } from './user-location/user-location.component';


const routes: Routes = [
  { path: '', component: UserLocationComponent },
  { path: 'user-location', component: UserLocationComponent },
  { path: 'location-history', component: LocationHistoryComponent },
  { path: 'location-history/:userId', component: LocationHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
