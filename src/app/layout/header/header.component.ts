import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  SVG_BASEPATH: string = '../../../../';


  headerItems: object = [
    { label: 'Dashboard', route: 'dashboard', svgUrl: `${this.SVG_BASEPATH}assets/icons/ico_dashboard.svg`, alt: 'Dashboard' },
    { label: 'Users', route: 'users', svgUrl: `${this.SVG_BASEPATH}assets/icons/ico_users.svg`, alt: 'Users' },
    { label: 'Session Manager', route: 'session-manager', svgUrl: `${this.SVG_BASEPATH}assets/icons/ico_sessionmanager.svg`, alt: 'Session Manager' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
