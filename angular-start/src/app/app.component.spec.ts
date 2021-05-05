import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
// import each from 'jest-each';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Hello World'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello World');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Hello World app is running!');
  });

  const parameters = [
    {wrongTittle: 'No such title', description: 'Title is not ... no such'},
    {wrongTittle: 'Different title', description: 'Title is not ... different'}
  ];


  parameters.forEach((parameter) => {
    it(`should not have ` + parameter.description, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).not.toEqual(parameter.wrongTittle);
    });
  });

    // each([
    //   ['No such title', 'Title is not ... no such'],
    //   ['Different title', 'Title is not ... different']
    // ]).test("should not have as title '%s, message: %s", async (wrongTittle, testsMessage) => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.componentInstance;
    //   expect(app.title).not.toEqual(wrongTittle);
    //   });

});
