import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';

fdescribe('LocationService', () => {
  let service: LocationService;
  const environment = {
    production: false,
  
    locationApi: {
      url: 'https://locationhistoryapi.azurewebsites.net/'
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
