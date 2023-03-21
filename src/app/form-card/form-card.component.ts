import { FormService } from './../services/form.service';
import { AddForm } from './../models/add-form';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  @Input() forms: AddForm;

  form: AddForm = new AddForm();

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getAllForms().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.forms=response;
  }

  deleteForm(id: string) {

  }

}
