import {Injectable} from '@angular/core'
import { Router } from '@angular/router';
import { IUser, User } from './user.model'

@Injectable()
export class AuthService{

    public currentUser : IUser 

    constructor(){
        this.currentUser = new User();
    }

    loginUser(userName : string, password : string){
        this.currentUser = {
            id : 1,
            userName : userName,
            firstName : userName,
            lastName : 'Papa'
        }
    }

    logoutUser(){
        this.currentUser = new User();
    }

    isAuthenticated(){
        return !!this.currentUser.id;
    }
    
    updateCurrentUser(firstName : string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}