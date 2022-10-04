import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { E404Component } from './errors/e404/e404.component';
import { EventRouterActivator } from './events/event-details/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list/events-list-resolver.service';
import { EventsListComponent, EventThumbnailComponent, CreateEventComponent } from './events/index';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    E404Component
  ],
  providers : [EventService, 
    ToastrService, 
    EventRouterActivator,
    EventListResolver,
    AuthService,
    {provide : 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel ?');
  }
  return true;
}
