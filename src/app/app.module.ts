import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { E404Component } from './errors/e404/e404.component';
import { EventRouterActivator } from './events/event-details/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list/events-list-resolver.service';
import { EventsListComponent, EventThumbnailComponent, CreateEventComponent, DurationPipe } from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { JQ_TOKEN } from './common/Jquery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

declare let toastr : Toastr
declare let jQuery : any
//let toastr:Toastr = window['toastr'];
//let jQuery:any = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    E404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers : [EventService, 
    {provide : TOASTR_TOKEN, useValue: toastr},
    {provide : JQ_TOKEN, useValue: jQuery},
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
