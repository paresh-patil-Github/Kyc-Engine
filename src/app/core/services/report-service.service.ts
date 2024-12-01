import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http:HttpClient) { }

  private bseurl ='http://localhost:8080/v1/export-report';

  generateReport(){

    return this.http.get(`${this.bseurl}/export/excle` ,
      {responseType : 'blob',}
    );
  }

  generateKycCompleteStatusReport(){

    return this.http.get(`${this.bseurl}/export/excle-kyc-complete` ,
      {responseType : 'blob',}
    );
  }

  generateKycIncompleteStatusReport(){

    return this.http.get(`${this.bseurl}/export/excle-kyc-Incomplete` ,
      {responseType : 'blob',}
    );
  }

 
}
