import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log('toto');
    this.authService.logoutUser();
    this.route.navigate(['/login']);
  }

}
