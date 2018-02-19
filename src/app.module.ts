import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactCardComponent } from './contact-card.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}