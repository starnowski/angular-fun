import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { XmlutilService } from '../xmlutil.service';

@Component({
  selector: 'app-codemirror-binding',
  templateUrl: './codemirror-binding.component.html',
  styleUrls: ['./codemirror-binding.component.css']
})
export class CodemirrorBindingComponent implements OnInit {


  content:string = "";
  @Input() valid:boolean = false;
  @Output() validChange = new EventEmitter<boolean>();

  @ViewChild("codemirror")
  codemirror!: CodemirrorComponent;

  constructor(xmlutilService:XmlutilService) { }

  ngOnInit(): void {
  }

  onEdit(): void {
    console.log("value: ", this.content);
  }

}
