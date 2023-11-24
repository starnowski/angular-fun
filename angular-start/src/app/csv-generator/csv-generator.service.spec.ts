import { TestBed } from '@angular/core/testing';

import { CsvGeneratorService } from './csv-generator.service';

const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' },
  // Add more data as needed
];

const expectedCSVString:string = `
name,age,city\r\nJohn,30,New York\r\nJane,25,San Francisco
`.trim();


describe('CsvGeneratorService', () => {
  let service: CsvGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate correct csv text', () => {
    // WHEN
    const result = service.generateCSVContent(data);

    // THEN
    expect(result).toEqual(expectedCSVString);
  });
});
