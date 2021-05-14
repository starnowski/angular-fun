import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit, OnChanges {

  // @Input() initialCount;
  @Input() _count: number;

  constructor() { 
    // this.initialCount = 0;
    this._count = 0;
  }

  ngOnInit(): void {
    // console.log("ngOnInit " + this.initialCount);
    // this._count = this.initialCount;
    console.log("ngOnInit " + this._count);
  }

  ngOnChanges(): void {
    // this._count = this.initialCount;
    console.log("ngOnChanges " + this._count);
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
