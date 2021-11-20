import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { location } from 'src/app/core/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-history',
  templateUrl: './location-history.component.html',
  styleUrls: ['./location-history.component.scss']
})
export class LocationHistoryComponent implements OnInit {

  loadingLocations: boolean = false;
  locationHistory: location[] = [];
  searchForm: FormGroup;
  constructor(private locationService: LocationService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });

    this.route.params
      .subscribe(param => {
        this.searchForm.patchValue({keyword: param.userId});
        this.getLocationHistory();
      });
  }

  getKeyword(){
    return this.searchForm.controls['keyword'].value;
  }

  searchReset(){
    this.searchForm.patchValue({keyword: ''});
  }

  getLocationHistory() {
    const searchkey = this.getKeyword();
    if (searchkey) {
      this.locationHistory = [];
      this.loadingLocations = true;
      this.locationService.getLocationHistory(searchkey).toPromise()
      .then((response)=> {
        this.locationHistory = response.locations;
      })
      .catch((error)=> {this.showErrorMessage(error)})
      .finally(()=> this.loadingLocations = false)
      }
    }
  
  showErrorMessage(error: any){
    console.log(error);
  }

  backToLocation(){
    this.router.navigate(['/location/user-location']);
  }

}
