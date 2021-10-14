import { TestBed } from '@angular/core/testing';

import { XmlutilService } from './xmlutil.service';

describe('XmlutilService', () => {
  let service: XmlutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
