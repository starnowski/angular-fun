import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomItemWithIdService } from "../random-item-with-id.service";
import { SelectScrollExampleComponent } from './select-scroll-example.component';

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

  it('should invoke service on input click', () => {
    // GIVEN
    let input = fixture.debugElement.nativeElement.querySelector('.ng-select input.ng-input');

    // WHEN
    input.triggerEventHandler('focus', null);

    // THEN
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(findItemsSpy.calls.count()).toEqual(1);
    });
  });

});
