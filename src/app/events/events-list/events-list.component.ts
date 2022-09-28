import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events : any[] | undefined;

  constructor(private eventService : EventService, private toastrService : ToastrService) { 
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data: any){
    this.toastrService.success(data);
  }

}
