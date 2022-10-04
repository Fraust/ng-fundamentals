import{NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {userRoutes} from './user.routes'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        LogoutComponent
    ],
    providers:[
    ]
})
export class UserModule {

}