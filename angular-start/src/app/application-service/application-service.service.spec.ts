import { TestBed } from '@angular/core/testing';

import { ApplicationServiceService } from './application-service.service';
import { ApplicationConfig } from './application-config';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHandler } from '@angular/common/http';

import { defer } from 'rxjs';

describe('ApplicationServiceService', () => {
  let service: ApplicationServiceService;
  let httpClientSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
            HttpClient,
            HttpHandler
          ]
    });
    const httpClient = TestBed.inject(HttpClient);
    httpClientSpy = spyOn(httpClient, 'get');
    service = TestBed.inject(ApplicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

it('should return expected application config (HttpClient called once)', (done: DoneFn) => {
  const expectedApplicationConfig: ApplicationConfig = { mockedServer: true, name: 'best app' };
//     [{ mockedServer: true, name: 'my app' }, { mockedServer: true, name: 'best app' }];

  httpClientSpy.and.returnValue(asyncData(expectedApplicationConfig));

  service.getApplicationConfig().subscribe(
    applicationConfig => {
      expect(applicationConfig).toEqual(expectedApplicationConfig, 'expected application config');
      done();
    },
    done.fail
  );
  expect(httpClientSpy.calls.count()).toBe(1, 'one call');
});

const expectedApplicationConfigs: ApplicationConfig[] = [{ mockedServer: true, name: 'best app' },
{ mockedServer: false, name: 'my app' }];
expectedApplicationConfigs.forEach(function (expectedApplicationConfig) {
  it('should return expected application config (HttpClient called once), name: ' + expectedApplicationConfig.name, (done: DoneFn) => {
  
    httpClientSpy.and.returnValue(asyncData(expectedApplicationConfig));
  
    service.getApplicationConfig().subscribe(
      applicationConfig => {
        expect(applicationConfig).toEqual(expectedApplicationConfig, 'expected application config');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.calls.count()).toBe(1, 'one call');
  });
});

it('should return an error when the server returns a 404', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.and.returnValue(asyncError(errorResponse));

  service.getApplicationConfig().subscribe(
    applicationConfig => done.fail('expected an error, not app config'),
    error  => {
      expect(error.message).toContain('test 404 error');
      done();
    }
  );
});

});

/**
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
