import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISession } from 'src/app/events';
import { EventService } from 'src/app/events/shared/event.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm : string = '';
  foundSessions : ISession[] = [];

  constructor(public authService : AuthService, private eventService : EventService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logoutUser();
  }

  searchSessions(searchTerm : string){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }

}
