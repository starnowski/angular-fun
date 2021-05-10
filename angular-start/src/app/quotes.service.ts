import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor() { }

  getQuotes(): Quote[] {
    return QUOTES;
  }

  getRandomQuote(): Quote {
    const index = Math.floor(Math.random() * (QUOTES.length));
    return QUOTES[index];
  }
}
