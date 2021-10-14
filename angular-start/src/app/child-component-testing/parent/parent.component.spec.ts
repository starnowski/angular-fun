import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';

import { ParentComponent } from './parent.component';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let childComponent: ChildComponent;
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
    childComponent = fixture.debugElement.query(By.directive(ChildComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init properties', () => {
    expect(childComponent.property1).toBeTruthy();
    expect(childComponent.property2).toEqual("this is raw string");
  });
});
