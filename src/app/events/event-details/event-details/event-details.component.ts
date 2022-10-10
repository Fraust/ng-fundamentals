import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router'
import { IEvent, ISession } from '../../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event : IEvent | undefined;
  addMode : boolean = false;
  filterBy:string = 'all';
  sortBy:string = 'name';

  constructor(private eventService : EventService,
    private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession(){
    this.addMode = true;
  }

  handleCancelClicked(){
    this.addMode = false;
  }

  saveNewSession(session : ISession){
    const newtId = Math.max.apply(null,this.event!.sessions.map(s=> s.id));
    session.id = newtId + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event!);
    this.addMode = false;
  }

}
