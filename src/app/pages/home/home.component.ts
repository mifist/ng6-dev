import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Welcome!!!';
  sub_title = 'to';
  sub_title_2 = 'Home Page';

  handleDropdownSelection(value) {
    this.title = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
