import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { UserLocationComponent } from './user-location/user-location.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationHistoryComponent } from './location-history/location-history.component';
import { LocationService } from '../services/location.service';


@NgModule({
  declarations: [
    UserLocationComponent, LocationHistoryComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ClarityModule,
    ReactiveFormsModule
  ],
  providers: [LocationService],
  exports: []
})
export class LocationModule { }
