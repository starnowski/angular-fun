import { TestBed } from '@angular/core/testing';

import { PromiseInCatchService } from './promise-in-catch.service';

describe('PromiseInCatchService', () => {
  let service: PromiseInCatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromiseInCatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returnPromiseWithTryAndCatch', async () => {
    // WHEN
    let result = await service.returnPromiseWithTryAndCatch();

    // THEN
    expect(result).toEqual("OK-result");
  });

  it('returnPromiseWithTryAndCatchAndRootCatch', async () => {
    // WHEN
    let result = await service.returnPromiseWithTryAndCatchAndRootCatch();

    // THEN
    expect(result).toEqual("OK-result");
  });

  it('returnPromiseWithTryAndInnerCatch', async () => {
    // WHEN
    let result = await service.returnPromiseWithTryAndInnerCatch();

    // THEN
    expect(result).toEqual("OK-catch-result");
  });

  it('returnPromiseWithTryAndInnerCatchAndRootCatch', async () => {
    // WHEN
    let result = await service.returnPromiseWithTryAndInnerCatchAndRootCatch();

    // THEN
    expect(result).toEqual("OK-catch-result");
  });


});
