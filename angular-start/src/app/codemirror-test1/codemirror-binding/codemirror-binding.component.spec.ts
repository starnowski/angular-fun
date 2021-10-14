import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemirrorBindingComponent } from './codemirror-binding.component';

describe('CodemirrorBindingComponent', () => {
  let component: CodemirrorBindingComponent;
  let fixture: ComponentFixture<CodemirrorBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodemirrorBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemirrorBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
