import { TestBed } from '@angular/core/testing';

import { ApplicationServiceService } from './application-service.service';
import { ApplicationConfig } from './application-config';

describe('ApplicationServiceService', () => {
  let service: ApplicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(ApplicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

it('should return expected application config (HttpClient called once)', (done: DoneFn) => {
  const expectedApplicationConfig: ApplicationConfig = { mockedServer: true, name: 'best app' };
//     [{ mockedServer: true, name: 'my app' }, { mockedServer: true, name: 'best app' }];

  httpClientSpy.get.and.returnValue(asyncData(expectedApplicationConfig));

  service.getApplicationConfig().subscribe(
    applicationConfig => {
      expect(applicationConfig).toEqual(expectedApplicationConfig, 'expected application config');
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
});
