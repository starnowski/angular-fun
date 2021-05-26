import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectExampleComponent } from './ng-select-example.component';

describe('NgSelectExampleComponent', () => {
  let component: NgSelectExampleComponent;
  let fixture: ComponentFixture<NgSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
