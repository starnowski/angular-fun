import { of } from "rxjs/internal/observable/of";
import { concatMap } from "rxjs/operators";



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
});