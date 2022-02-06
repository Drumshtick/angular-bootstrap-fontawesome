import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NiceDatePipe } from './nice-date.pipe';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';


@NgModule({
  declarations: [ // components that the app might need
    AppComponent, NiceDatePipe, FontAwesomeComponent
  ],
  imports: [  // All need imported packages
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// The app will create and insert this component into the index.html host webpage
})
export class AppModule { }
