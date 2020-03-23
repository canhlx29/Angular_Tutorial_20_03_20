import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
