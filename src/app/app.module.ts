import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event/create-event.component';
import { E404Component } from './errors/e404/e404.component';
import { EventRouterActivator } from './events/event-details/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list/events-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';

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
    E404Component,
    ProfileComponent
  ],
  providers : [EventService, 
    ToastrService, 
    EventRouterActivator,
    EventListResolver,
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
