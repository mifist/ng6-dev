import { Component, OnInit } from '@angular/core';

interface NavigationRouter {
  name: string;
  path: string;
}

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {
  listRouters: Array<NavigationRouter> = [];

  constructor() {
    this.listRouters.push({name: 'BACK TO MARS', path: '/'});
  }

  ngOnInit() {
  }

}
