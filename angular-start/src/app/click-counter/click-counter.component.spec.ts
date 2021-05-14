import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounterComponent } from './click-counter.component';

describe('ClickCounterComponent', () => {
  let component: ClickCounterComponent;
  let fixture: ComponentFixture<ClickCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Number of click should be correct', () => {
    // component.initialCount = 15;
    component._count = 15;
    fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(fixture.nativeElement.querySelector('div.click-counter-count').innerText).toEqual('15');
    // })
    expect(fixture.nativeElement.querySelector('div.click-counter-count').innerText).toEqual('15');
  });
  it('Number of click should be correct', () => {
    component._count = 8;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    button.click();
    fixture.detectChanges();

    // fixture.whenStable().then(() => {
    //   expect(fixture.nativeElement.querySelector('div.click-counter-count').innerText).toEqual('15');
    // })
    // expect(fixture.nativeElement.querySelector('div.click-counter-count').innerText).toEqual('10');
    fixture.whenStable().then(() => {
      expect(fixture.nativeElement.querySelector('div.click-counter-count').innerText).toEqual('10');
    });
  });
});
