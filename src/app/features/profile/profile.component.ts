import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileServiseService } from '../../core/services/profile-servise.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule ,HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [ProfileServiseService],
})
export class ProfileComponent implements OnInit{
  profileform!: FormGroup;

  constructor(private fb: FormBuilder , private profileService:ProfileServiseService){}

  ngOnInit(): void {
   this.profileform= this.fb.group({
    phone:[('') , Validators.required],
    address : [('') , Validators.required]

   });

   this.getProfileData();
  }


  onSubmit() : void{
    if(this.profileform.valid){
      console.log('profile update :', this.profileform.value);
      this.updateData( this.customerId,this.profileform.value);

    }

   
  }


  userDocuments = [
    {name : 'ID Proof'},
    {name : 'Address Proof'}
  ]
  activityLog=[
    {timestamp : '2024-11-10', action: 'Profile updated' },
    { timestamp: '2024-11-08', action: 'Document submitted'}
  ];


  viewDocument(doc : any):void{
    console.log('viewing document: ', doc.name);
  }

  customerId='1';

  userProfile = {
    fullName: '',
    email: '',
    phone: '',
    address : '',
    kycStatus : ''
  };


  getProfileData(){
    const customerId=1; 
  
    this.profileService.getProfile(customerId).subscribe({
      next: (data) => {
        console.log('Fetched profile:', data); // Log the fetched profile data
        this.userProfile = data; // Assign the fetched data to your component's property
      },
      error: (error) => {
        console.error('Error while fetching profile:', error); // Log any error
      },
    });
  }


  updateData(customerId: any, value: any){
    this.profileService.updateProfile(customerId ,value )
  }
  
}


