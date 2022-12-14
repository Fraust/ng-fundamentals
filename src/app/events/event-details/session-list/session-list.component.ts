import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[] = [];
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'name';
  visibleSessions : ISession[] = [];

  constructor() {
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDsc)
    }
  }

  ngOnInit(): void {
  }

  filterSessions(filter :string){
    if(filter === 'all'){
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

}

function sortByNameAsc(s1 : ISession, s2 : ISession){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDsc(s1 : ISession, s2 : ISession){
  return s2.voters.length - s1.voters.length 
}
