import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent  {
  catForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    });
  }


  onSubmit() {

    console.log('chat ajouter:', this.catForm.value);
  }
}
