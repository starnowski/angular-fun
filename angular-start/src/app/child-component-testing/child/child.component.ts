import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() property1 = false;
  @Input() property2:string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
