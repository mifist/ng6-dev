import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'ng6-dev';
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    $(this.elementRef.nativeElement.ownerDocument).foundation();
  }

}
