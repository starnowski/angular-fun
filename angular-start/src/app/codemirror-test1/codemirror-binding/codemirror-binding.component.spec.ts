import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XmlutilService } from '../xmlutil.service';

import { CodemirrorBindingComponent } from './codemirror-binding.component';

describe('CodemirrorBindingComponent', () => {
  let component: CodemirrorBindingComponent;
  let fixture: ComponentFixture<CodemirrorBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodemirrorBindingComponent ],
      providers: [XmlutilService]
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
