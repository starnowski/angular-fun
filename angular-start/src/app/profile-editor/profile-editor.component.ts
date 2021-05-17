import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { FormGroup, FormControl } from '@angular/forms';

// https://angular.io/guide/reactive-forms

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  genders = ["Male", "Female", "Other"];

  // gen: string = 'Male';

  profileForm = new FormGroup({
    name: new FormControl('John Doe'),
    gender: new FormControl('Male'),
  });

  model = new Profile(18, 'John Doe', 'Male');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
