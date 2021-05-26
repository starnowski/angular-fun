import { TestBed } from '@angular/core/testing';

import { RandomItemWithIdService } from './random-item-with-id.service';

describe('RandomItemWithIdService', () => {
  let service: RandomItemWithIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomItemWithIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct results for first chunk', () => {
    // WHEN
    const results = service.findItems('a', 0, 25, 250);

    // THEN
    expect(results.length).toEqual(25);
    expect(results[0].name).toEqual("a");
    expect(results[1].name).toEqual("a1");
    expect(results[24].name).toEqual("a24");
  });

  it('should return correct results for second chunk', () => {
    // WHEN
    const results = service.findItems('bc', 1, 25, 250);

    // THEN
    expect(results.length).toEqual(25);
    expect(results[0].name).toEqual("bc25");
    expect(results[1].name).toEqual("bc26");
    expect(results[24].name).toEqual("bc49");
  });
});
