import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';


@Component({
  selector: 'butt-stuff',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],// To link to a stylesheet

})
export class AppComponent {
  FontAwesomeComponent = FontAwesomeComponent;
  active = 'one';

  links = [
    { title: 'One', fragment: './font-awesome/font-awesome.component.html' },
  ];

  constructor(public route: ActivatedRoute) {}
}
