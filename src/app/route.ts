import { EventDetailsComponent } from "./events/event-details/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event/create-event/create-event.component";
import { E404Component } from "./errors/e404/e404.component";
import { EventRouterActivator } from "./events/event-details/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list/events-list-resolver.service";
import { CreateSessionComponent } from "./events";

export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
    {path: '404', component: E404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
]