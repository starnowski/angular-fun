import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvGeneratorService {
  generateCSVContent(data: any[]):string {
    return Papa.unparse(data);
  }

  constructor() { }
}
