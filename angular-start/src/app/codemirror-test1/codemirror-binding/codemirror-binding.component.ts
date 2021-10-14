import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codemirror-binding',
  templateUrl: './codemirror-binding.component.html',
  styleUrls: ['./codemirror-binding.component.css']
})
export class CodemirrorBindingComponent implements OnInit {


  content:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
