import { Component } from '@angular/core';
import { ReportServiceService } from '../../core/services/report-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { link } from 'node:fs';
import { error } from 'node:console';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  providers:[ReportServiceService]
})
export class ReportsComponent {

  constructor(private service : ReportServiceService){}

  private kycStatus:boolean=false;

  onClick(){
    console.log("inside onclick event")
    this.getUserReport();
    
  }

  onClickKycComplete(){
this.getKycScompletetatusReport();
  }

  onClickKycIncomplete(){
    this.getKycIncompleteStatusReport();
  }

  
  getKycScompletetatusReport(){

    this.service.generateKycCompleteStatusReport().subscribe({
      
        next:(response)=> {
          const blob= new Blob( [response] , {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          const link = document.createElement('a');
        link.href= window.URL.createObjectURL(blob);
        link.download= 'KycCompletereport.xlsx'
        link.click(); 
        window.URL.revokeObjectURL(link.href);
        },
      error :(error)=> {console.error('Error fetching reports:', error)},
  }); 
    
                
    }

  getKycIncompleteStatusReport(){

    
    this.service.generateKycIncompleteStatusReport().subscribe(
      {
        next:(response)=> {
          const blob= new Blob( [response] , {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          const link = document.createElement('a');
        link.href= window.URL.createObjectURL(blob);
        link.download= 'KycIncompletereport.xlsx'
        link.click(); 
        window.URL.revokeObjectURL(link.href);
        },
      error :(error)=> {console.error('Error fetching reports:', error)},
  });
    
                
    }
  



  getUserReport(){
    this.service.generateReport().subscribe(
      {
        next:(response)=> {
          const blob= new Blob( [response] , {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          const link = document.createElement('a');
        link.href= window.URL.createObjectURL(blob);
        link.download= 'report.xlsx'
        link.click(); 
        window.URL.revokeObjectURL(link.href);
        },
      error :(error)=> {console.error('Error fetching reports:', error)},
  });
    
  }
}
