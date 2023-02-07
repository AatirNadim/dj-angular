import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AatirComponent } from './aatir/aatir.component';


// also contain information about any third party libraries that the app uses.
@NgModule({
  declarations: [
    AppComponent,
    AatirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
