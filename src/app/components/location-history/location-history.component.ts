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

  search() {
    this.getLocationHistory();
  }

  getLocationHistory() {
    const searchkey = this.getKeyword();
    if (searchkey) {
      this.locationService.getLocationHistory(searchkey).subscribe((response) => {
        this.locationHistory = response.locations;
      })
    }
  }

  backToLocation(){
    this.router.navigate(['/user-location']);
  }

}
