import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomItemWithIdService } from "../random-item-with-id.service";
import { SelectScrollExampleComponent } from './select-scroll-example.component';
import { By } from '@angular/platform-browser';

describe('SelectScrollExampleComponent', () => {
  let component: SelectScrollExampleComponent;
  let fixture: ComponentFixture<SelectScrollExampleComponent>;
  let findItemsSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScrollExampleComponent ],
      providers: [
        RandomItemWithIdService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollExampleComponent);
    component = fixture.componentInstance;
    const randomItemWithIdService = TestBed.inject(RandomItemWithIdService);
    findItemsSpy = spyOn(randomItemWithIdService, 'findItems');
    findItemsSpy.and.returnValue([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should invoke service on input click', () => {
    // GIVEN
    // const input = fixture.debugElement.query(By.css('.ng-select .ng-input input'));
    const input = fixture.debugElement.query(By.css('ng-select'));

    // WHEN
    // input.click();
    // input.triggerEventHandler('click', null);
    const event = createEvent({ tagName: 'INPUT' }) as any;
    const control = fixture.debugElement.query(By.css('.ng-select-container'));
    input.triggerEventHandler('mousedown', event);

    // THEN
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(findItemsSpy.calls.count()).toEqual(1);
    });
  });

});

function createEvent(target = {}) {
  return {
      preventDefault: () => {
      },
      target: {
          className: '',
          tagName: '',
          classList: {
              contains: () => {
              }
          },
          ...target
      }
  }
}
