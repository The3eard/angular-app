import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navMenu',
  templateUrl: './navMenu.component.html',
  styleUrls: ['./navMenu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
  }

}

