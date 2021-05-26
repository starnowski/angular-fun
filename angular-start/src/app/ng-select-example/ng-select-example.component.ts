import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-select-example',
  templateUrl: './ng-select-example.component.html',
  styleUrls: ['./ng-select-example.component.css']
})
export class NgSelectExampleComponent implements OnInit {

  selectedCar: number = 0;
  selectedCar1: number = 0;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
