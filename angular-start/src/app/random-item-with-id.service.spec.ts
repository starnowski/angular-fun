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

  it('should return only max number of recors for first chunk', () => {
    // WHEN
    const results = service.findItems('c', 0, 21, 13);

    // THEN
    expect(results.length).toEqual(13);
    expect(results[0].name).toEqual("c");
    expect(results[1].name).toEqual("c1");
    expect(results[12].name).toEqual("c12");
  });

  it('should return empty array when index is larger than max number of results', () => {
    // WHEN
    const results = service.findItems('d', 11, 30, 300);

    // THEN
    expect(results.length).toEqual(0);
  });
});
