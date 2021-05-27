import { Injectable } from '@angular/core';
import { ItemWithId } from "./item-with-id";

@Injectable({
  providedIn: 'root'
})
export class RandomItemWithIdService {

  constructor() { }

  findItems(prefix:string, start:number = 0, limit:number = 25, max:number = 250):ItemWithId[]
  {
    if (limit > 0)
    { 
      let results:ItemWithId[] = new Array();
      if (start == 0) 
      {
        results.push(new ItemWithId(prefix, 0));
        for (let i = 1; i < limit && i < max; i++) 
        {
          results.push(new ItemWithId(prefix + i, i));
        }
      } else {
        let startIndex = start * limit;
        for (let i = startIndex; i < startIndex + limit && i < max; i++) 
        {
          results.push(new ItemWithId(prefix + i, i));
        }
      }
      return results;
    }
    return new Array();
  }
}
