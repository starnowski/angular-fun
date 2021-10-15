import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlutilService {

  constructor() { }


  validate(xml: string):boolean {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    const errorNode = doc.querySelector("parsererror");
    if (errorNode) 
    {
      console.debug("errorNode:", errorNode);
    }
    return !errorNode;
  }
}
