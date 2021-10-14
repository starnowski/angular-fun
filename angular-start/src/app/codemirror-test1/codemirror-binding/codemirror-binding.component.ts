import { Component, OnInit, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-codemirror-binding',
  templateUrl: './codemirror-binding.component.html',
  styleUrls: ['./codemirror-binding.component.css']
})
export class CodemirrorBindingComponent implements OnInit {


  content:string = "";

  @ViewChild("codemirror")
  codemirror!: CodemirrorComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
