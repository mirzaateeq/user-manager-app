import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userLocation } from 'src/app/core/user.location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {

  userLocations: userLocation[]=[];
  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((response)=>{
      if(response && response.values){
        this.userLocations = response.values;
      }
    });
  }

  showLocationHistory(userId: string){
    this.router.navigate([`/location-history/${userId}`]);
  }

}
