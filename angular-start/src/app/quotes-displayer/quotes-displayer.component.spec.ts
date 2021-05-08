import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDisplayerComponent } from './quotes-displayer.component';

describe('QuotesDisplayerComponent', () => {
  let component: QuotesDisplayerComponent;
  let fixture: ComponentFixture<QuotesDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
