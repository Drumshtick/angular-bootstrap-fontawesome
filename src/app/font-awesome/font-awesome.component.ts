import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser'; // Service for changing the title of the page

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss'],
  styles: [`.f-awesome {background-color: black}`]// Directly change styles
})
export class FontAwesomeComponent implements OnInit {
  // Properties
  // [ public | private | protected ]
  // Private does not help with security issues! Only private at compile-time
  // Signifies that the variable is only to be used within the class
  // Protected is like private but shows that it is used by derived class-
  // Public signifies that the class method or property will be used outside the class
  faCoffee = faCoffee;
  _COOKY: string="COOKIES 🍪🍪🍪🍪";
  COOKIES: string = `COOKIE MONSTA NEED ${this._COOKY}`
  _date = new Date()
  _yesterday = new Date(this._date.setDate(this._date.getDate() - 1));
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
  // Define an accessor with:
  // get| set function_name() : Data Type
  // This can save some risk by controlling how properties are get and set
  set COOKY(value: string) {
    // Check permisions before setting with:
    // if (this.IsAdmin) { this._PriorOwner = this._CurrentOwner; this._CurrentOwner = newOwner; }
    // Assuming IsAdmin flag is retrieved and set by database call
    // NOTE example properties
    this._COOKY = value;
  }
  get getCOOKY(): string {
    return this.COOKIES;
  }
  get f(){
    return this.form.controls;
  }

  get BrowserUserAgent(): string {
    // To pass an object declared outside the class
    // use a getter and return the object
    return navigator.userAgent
  }

  get date(): string {
    return this._date.toString();
  }

  submit(): void{
    // Class methods can also be public private or protected
    console.log(this.form.value);
    this._COOKY = this.form.value.name;
    console.log("HERE: ", this._COOKY)
    this.title.setTitle(this.form.value.name)
    this.form.reset(); // Resets form value
    this.COOKY = "COOKIE MONSTA NEED COOKIES 🍪🍪🍪🍪";
  }

  makeChange(value: string){
    console.log(value);        //Changed Value
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

    this.title.setTitle("MESS OF A TESTING PROJECT")
  }

  public constructor(private title: Title) {
    // Title Service for changing the title of the page
    // Invoked when the class is first instantiated
    setInterval(() => {
      this._date = new Date();
    }, 1);
  }
}
