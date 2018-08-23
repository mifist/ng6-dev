import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface DropdownRouter {
  name: string;
  path: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  listRouters: Array<DropdownRouter> = [];

  expanded: Boolean = false;

  @Input() dropdownTitle;

  @Output() checkedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.listRouters.push(
      {name: 'Sorting', path: 'sorting'},
      {name: 'Test Form', path: 'test-form'},
      {name: 'form Group', path: 'form-group'}

    );
  }

  toggleDropdown(e) {
    this.expanded = !this.expanded;
    return false;
  }

  ngOnInit() {
  }

}
