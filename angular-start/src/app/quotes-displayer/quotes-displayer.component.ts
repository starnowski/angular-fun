import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-displayer',
  templateUrl: './quotes-displayer.component.html',
  styleUrls: ['./quotes-displayer.component.css']
})
export class QuotesDisplayerComponent implements OnInit {

  @Input('qoute') qoute: Quote = { text: "", author: "", date: new Date(0) };

  ngOnInit(): void {
  }

}
