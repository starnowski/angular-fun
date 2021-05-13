import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {

  @Input() initialCount = 0;
  private _count: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
    this._count = this.initialCount;
  }

  get count()
  {
    return this._count;
  }

  incCount(): void 
  {
    this._count++;
  }

}
