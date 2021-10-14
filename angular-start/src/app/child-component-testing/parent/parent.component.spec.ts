import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';

import { ParentComponent } from './parent.component';
import { MockComponent } from 'ng-mocks';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, MockComponent(ChildComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
