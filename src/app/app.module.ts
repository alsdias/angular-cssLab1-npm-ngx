import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
//import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
