import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorComponent } from './profile-editor.component';

describe('ProfileEditorComponent', () => {
  let component: ProfileEditorComponent;
  let fixture: ComponentFixture<ProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[id="name"]');
    const genderInput = compiled.querySelector('select[id="gender"]');

    expect(nameInput).toBeTruthy();
    expect(genderInput).toBeTruthy();
  });


  // it('should update the value of the input field', () => {
  //   const input = fixture.nativeElement.querySelector('input');
  //   const event = createNewEvent('input');
  
  //   input.value = 'Red';
  //   input.dispatchEvent(event);
  
  //   expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
  // });
});
