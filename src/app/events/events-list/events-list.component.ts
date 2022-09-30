import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events : any | undefined;

  constructor(private eventService : EventService, private toastrService : ToastrService, private route : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data: any){
    this.toastrService.success(data);
  }

}
