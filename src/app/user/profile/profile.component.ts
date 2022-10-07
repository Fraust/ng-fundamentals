import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit {

  private firstName : FormControl = new FormControl('');
  private lastName : FormControl = new FormControl('');
  profileForm : FormGroup = new FormGroup({
    firstName : this.firstName,
    lastName : this.lastName
  });

  constructor(private auth : AuthService, private route : Router){
  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName  = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName
    });
  }

  cancel(){
    this.route.navigate(["/events"]);
  }

  saveProfile(formValues : any){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.route.navigate(["/events"]);
    } 
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }
       
}