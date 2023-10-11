import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseInCatchService {

  constructor() { }

  public returnPromiseWithTryAndCatch():Promise<any>{

    //TODO
    return Promise.reject("zzz").catch((error) => {
      return Promise.resolve("OK-result");
    });
  }

  public returnPromiseWithTryAndCatchAndRootCatch():Promise<any>{

    //TODO
    return Promise.reject("zzz").catch((error) => {
      return Promise.resolve("OK-result");
    }).catch((error) => {
      return Promise.resolve("OK-result-catch");
    });
  }

  public returnPromiseWithTryAndInnerCatch():Promise<any>{

    //TODO
    return Promise.resolve("zzz").then((result) => {
      return Promise.reject("Failed zzz").catch((error) => {
        return Promise.resolve("OK-catch-result");
      });
    });
  }

  public returnPromiseWithTryAndInnerCatchAndRootCatch():Promise<any>{

    //TODO
    return Promise.resolve("zzz").then((result) => {
      return Promise.reject("Failed zzz").catch((error) => {
        return Promise.resolve("OK-catch-result");
      });
    }).catch((error) => {
      return Promise.resolve("OK-root-catch-result");
    });
  }
  
}
