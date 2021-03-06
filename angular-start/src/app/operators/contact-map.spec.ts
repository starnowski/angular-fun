import { throwError } from "rxjs";
import { EMPTY } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { catchError, concatMap, map } from "rxjs/operators";



describe("contactMap operations", () => {
    beforeAll(async () => {
    });

    it("should execute concatMap", async () => {
        // GIVEN
        let obs= of(1,2,3,4)
        let results = new Array();
        let expectedResults = [2, 4, 6, 8];
 
        let stream = obs.pipe(
        concatMap( val => {
            return of(val*2)  //Returning observable
        })
        )
        .subscribe(ret=> {
            results.push(ret);
        });

        // THEN
        expect(results).toEqual(expectedResults);
      });

      it("should execute two concatMap", async () => {
        // GIVEN
        let obs= of(1,2,3,4)
        let results = new Array();
        let expectedResults = [4, 8, 12, 16];
 
        let stream = obs.pipe(
        concatMap( val => {
            return of(val*2)  //Returning observable
        }),
        concatMap( val => {
            return of(val*2)  //Returning observable
        })
        )
        .subscribe(ret=> {
            results.push(ret);
        });

        // THEN
        expect(results).toEqual(expectedResults);
      });

      it("should execute concatMap with error handling", async () => {
        // GIVEN
        let obs= of(1, 0, 0, 2)
        let results = new Array();
        let expectedResults = [2, -1];
 
        let stream = obs.pipe(
        concatMap( val => {
            if (val == 0) {
                throw new Error();
            }
            return of(2 / val)  //Returning observable
        })
        )
        .subscribe(ret=> {
            results.push(ret);
        },
        err => {
            results.push(-1);
        }
        );

        // THEN
        expect(results).toEqual(expectedResults);
      });

      it("should run concatMap with error handling for all elements", async () => {
        // https://iamturns.com/continue-rxjs-streams-when-errors-occur/
        // GIVEN
        let obs= of(1, 0, 0, 2)
        let results = new Array();
        let expectedResults = [2, -1, -1, 1];
 
        // WHEN
        let stream = obs.pipe(
        concatMap( val => {
            return of(val).pipe(
                map(v =>{
                    if (val == 0) {
                        throw new Error();
                    }
                    return 2 / val;
                }),
            catchError((err) => {
                results.push(-1);
                return EMPTY;
            })
            );
        }),
        )
        .subscribe(ret=> {
            results.push(ret);
        }
        );

        // THEN
        expect(results).toEqual(expectedResults);
      });

      it("should run multiple concatMap with error handling for all elements", async () => {
        // https://iamturns.com/continue-rxjs-streams-when-errors-occur/
        // https://www.intertech.com/angular-best-practice-rxjs-error-handling/
        // https://www.tektutorialshub.com/angular/using-concatmap-in-angular/#concatmap-example
        // GIVEN
        let obs= of(1, 0, 2, 4)
        let results = new Array();
        let expectedResults = [4, -1, -1, 10];
 
        // WHEN
        let stream = obs.pipe(
        concatMap( val => {
            return of(val).pipe(
                concatMap(v =>{
                    if (v == 0) {
                        throw new Error();
                    }
                    return of(v + 1);
                }),
                concatMap(v =>{
                    if (v == 3) {
                        throw new Error();
                    }
                    return of(v * 2);
                }),
                catchError((err) => {
                    results.push(-1);
                    return EMPTY;
                })
            );
        }),
        )
        .subscribe(ret=> {
            results.push(ret);
        }
        );

        // THEN
        expect(results).toEqual(expectedResults);
      });
});