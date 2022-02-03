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
  styleUrls: ['./app.component.scss'],
  styles: [`.f-awesome {background-color: black}`]// Directly change styles or link a stylesheet
})
export class AppComponent {
  title = 'test';
  faCoffee = faCoffee;
  COOKIES="COOKIE MONSTER LIKE COOKIES 🍲🍲🍲🍲";
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
}
