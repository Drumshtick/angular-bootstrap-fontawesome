import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'butt-stuff',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],// To link to a stylesheet
  styles: [`.f-awesome {background-color: black}`]// Directly change styles
})
export class AppComponent {
  // Properties
  // [ public | private | protected ]
  // Private does not help with security issues! Only private at compile-time
  // Signifies that the variable is only to be used within the class
  // Protected is like private but shows that it is used by derived class-
  // Public signifies that the class method or property will be used outside the class
  title: string = 'test';
  faCoffee = faCoffee;
  COOKY: string="COOKIES 🍲🍲🍲🍲";
  COOKIES: string = `COOKIE MONSTA NEED ${this.COOKY}`
  countries: Country[] = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
  ];
  // Invoked when the class is first instantiated
  public constructor() {

  }
}
