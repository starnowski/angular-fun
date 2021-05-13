import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDisplayerComponent } from './quotes-displayer/quotes-displayer.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDisplayerComponent,
    ClickCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
