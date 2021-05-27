import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScrollExampleComponent } from './select-scroll-example.component';

describe('SelectScrollExampleComponent', () => {
  let component: SelectScrollExampleComponent;
  let fixture: ComponentFixture<SelectScrollExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScrollExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
