import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navMenu',
  templateUrl: './navMenu.component.html',
  styleUrls: ['./navMenu.component.css']
})
export class NavMenuComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;

  constructor(private loginService: LoginService, protected router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
  }

}

