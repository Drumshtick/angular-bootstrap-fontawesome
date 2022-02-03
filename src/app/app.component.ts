import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  _COOKY: string="COOKIES 🍲🍲🍲🍲";
  COOKIES: string = `COOKIE MONSTA NEED ${this._COOKY}`
  // Define an accessor with:
  // get| set function_name() : Data Type
  // This can save some risk by controlling how properties are get and set
  set COOKY(value: string) {
    this._COOKY = value;
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }



  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  ngOnInit(){
    // This will log any changes to the form field
    this.form.valueChanges.subscribe(selectedValue => {
      console.log('name changed')
      console.log(selectedValue)
    })
  }

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
