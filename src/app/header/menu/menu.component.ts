import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

interface NavigationRouter {
  name: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  navigationRouters: Array<NavigationRouter> = [];

  constructor(
    private router: Router,

  ) {
    this.navigationRouters.push(
      {name: 'Home', path: '/'},
      {name: 'Dashboard', path: 'dashboard'},
      {name: 'Not Found', path: 'not-found'}

    );
  }

  goHome(event): void {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
