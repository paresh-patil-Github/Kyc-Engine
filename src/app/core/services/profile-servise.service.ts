import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { application } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { json } from 'stream/consumers';



@Injectable({
  providedIn: 'root'
})
export class ProfileServiseService {

  constructor(private http :HttpClient) { }


  private BaseUrl = 'http://localhost:8080/v1/profile'; //profile_base_url;

  getProfile(customerId:any):Observable<any>{
    return this.http.get(`${this.BaseUrl}/get-profile/${customerId}`).pipe(
      tap((data:any) => console.log(data)),
      catchError((error) => {
        console.error('Error Fetching profile', error);
         throw (error);
      })
    );
  }

  //method to update profile data 
  updateProfile(customerId:any , profileData:any): Observable<any>{
  const headers = new HttpHeaders({'Content-Type' : 'application/json'});
  return this.http.put(`${this.BaseUrl}/update-profile/${customerId}` , profileData , {headers}) 
          .pipe(
            catchError((error) => {
              console.error('Error updating profile :', error);
              throw error;
            })
          );
  }

  
}
