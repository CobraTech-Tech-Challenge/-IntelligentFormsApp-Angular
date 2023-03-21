import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { AddForm, Field } from '../models/add-form';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-auto-create-form-page',
  templateUrl: './auto-create-form-page.component.html',
  styleUrls: ['./auto-create-form-page.component.css']
})
export class AutoCreateFormPageComponent implements OnInit {
  
    formGroup: FormGroup = new FormGroup({
    title: new FormControl(),
    label: new FormControl(),
    placeholder: new FormControl(),
    isMandatory: new FormControl(),
    fieldType: new FormControl(),
  });

  
  form: AddForm = new AddForm();
  fields: Field[] = [];
  response: any;

  constructor(
    private formBuilder: FormBuilder,
    public formService: FormService,
    private router: Router) {
    
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      fields: this.formBuilder.array([])
    });
  }

  
  addField(): void {
    const newField: Field = {
      label: '',
      placeholder: '',
      isMandatory: false,
      fieldType: ''
    };
    this.fields.push(newField);
    const newFieldIndex = this.fields.length - 1;
    const fieldsFormArray = this.formGroup.get('fields') as FormArray;
  fieldsFormArray.push(this.createFieldGroup());
  }

  createFieldGroup(): FormGroup {
  return this.formBuilder.group({
    label: ['', Validators.required],
    placeholder: [''],
    isMandatory: [false],
    fieldType: ['text']
  });
}

  setValue() {
    this.formGroup.setValue({
      title: this.formGroup.get('title').value,
      fields: this.formGroup.get('fields').value,
    });
    console.log(this.formGroup.value);
    this.formService.createForm(this.formGroup.value).subscribe(data => {
      this.response = data;
      console.log('Form submitted successfully:', this.response);
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }
}