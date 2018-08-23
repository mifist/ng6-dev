import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  page_title: string = 'Testing Forms';

  itemCound: number;
  inputLabel: string = '>>';
  inputPlacrholder: string = 'Text Field...';
  btnName: string = 'Add Field';
  fieldText: string = 'First text for this field';
  fields_txt = [];

  constructor() {
  }

  ngOnInit() {
    this.itemCound = this.fields_txt.length;
  }

  addFields() {
    this.fields_txt.push(this.fieldText);
    this.fieldText = '';
    this.itemCound = this.fields_txt.length;


  }

}
