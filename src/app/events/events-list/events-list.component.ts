import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    id:1,
    name : 'Angular Connect',
    date : '9/26/2036',
    price : 599.99,
    location : {
      address : '1057 DT',
      city : 'London'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
