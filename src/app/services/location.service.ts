import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { locationResponse } from '../core/location.response';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { locationHistory } from '../core/location.history';

@Injectable()
export class LocationService {

  apiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.locationApi.url; 
  }

  public getLocations(): Observable<locationResponse> {
    return this.httpClient.get<locationResponse>(`${this.apiUrl}/location`);
  }

  public getLocationHistory(userId: string): Observable<locationHistory> {
    return this.httpClient.get<locationHistory>(`${this.apiUrl}/locationhistory/${userId}`)
    .pipe(
      map((response: locationHistory)=>{
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    return throwError('Error occured, please try again.');
  }
}