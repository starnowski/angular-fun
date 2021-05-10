import { Component } from '@angular/core';
import { Quote } from './quote';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotesService]
})
export class AppComponent {
  title = 'Hello World';
  randomQoute: Quote;

  constructor(private qoutesService: QuotesService) {
    this.randomQoute = qoutesService.getRandomQuote();
  }
}
