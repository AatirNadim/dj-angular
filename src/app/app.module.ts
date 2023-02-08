import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AatirComponent } from './aatir/aatir.component';
import { TempDirDirective } from './temp-dir.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

// also contain information about any third party libraries that the app uses.
@NgModule({
  declarations: [
    AppComponent,
    AatirComponent,
    TempDirDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
  ],
  exports : [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
