import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event : any
  @Output() eventClick = new EventEmitter()

  showprice : boolean = true
  someProperty :any = "Some value"
  constructor() { }

  ngOnInit(): void {
  }
  
  handleClickMe(){
    this.eventClick.emit(this.event.name)
  }

  logfoo(){
    console.log("logfoo")
  }

  hide(){
    this.showprice = !this.showprice;
  }

  getStartTimeClass(){
    if(this.event?.time === '8:00 am'){
      return 'green';
    }
    if(this.event?.time === '10:00 am'){
      return 'red';
    }
    return '';
  }

}
