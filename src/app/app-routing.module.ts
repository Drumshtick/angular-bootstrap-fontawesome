import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';


const routes: Routes = [
  { path: 'fontAwesome', component: FontAwesomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
