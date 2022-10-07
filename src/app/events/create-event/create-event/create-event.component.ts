import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  newEvent :any 

  newEventForm : FormGroup = new FormGroup({
    imageUrl : new FormControl('')
  });


  constructor(private route:Router, private event : EventService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues : any){
    console.log(formValues);
    this.event.saveEvent(formValues);
    this.isDirty = false;
    this.route.navigate(['/events']);
  }

  cancel(){
    this.route.navigate(['/events']);
  }
}
