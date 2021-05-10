import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes-displayer',
  templateUrl: './quotes-displayer.component.html',
  styleUrls: ['./quotes-displayer.component.css']
})
export class QuotesDisplayerComponent implements OnInit {

  @Input() qoute: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
