import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XmlutilService } from '../xmlutil.service';

import { CodemirrorBindingComponent } from './codemirror-binding.component';

describe('CodemirrorBindingComponent', () => {
  let component: CodemirrorBindingComponent;
  let fixture: ComponentFixture<CodemirrorBindingComponent>;
  let xmlutilServiceSpy: jasmine.Spy;

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
    const xmlutilService = TestBed.inject(XmlutilService);
    xmlutilServiceSpy = spyOn(xmlutilService, 'validate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set xml as valid when xmlservice confirms it', () => {
    // GIVEN
    xmlutilServiceSpy.and.returnValue(true);

    // WHEN
    component.content = "<x></x>";
    component.onEdit();

    // THEN
    fixture.detectChanges();
    expect(component.valid).toBeTrue();
    fixture.whenStable().then(() => {
      expect(xmlutilServiceSpy.calls.count()).toEqual(1);
    });
  });

  it('should set xml as invalid when xmlservice confirms it', () => {
    // GIVEN
    xmlutilServiceSpy.and.returnValue(false);

    // WHEN
    component.content = "<x></x>";
    component.onEdit();

    // THEN
    fixture.detectChanges();
    expect(component.valid).toBeFalse();
    fixture.whenStable().then(() => {
      expect(xmlutilServiceSpy.calls.count()).toEqual(1);
    });
  });
});
