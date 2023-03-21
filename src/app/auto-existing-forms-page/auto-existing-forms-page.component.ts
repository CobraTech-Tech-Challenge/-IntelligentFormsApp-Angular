import { Component, OnInit } from '@angular/core';
import { AddForm } from '../models/add-form';

@Component({
  selector: 'app-auto-existing-forms-page',
  templateUrl: './auto-existing-forms-page.component.html',
  styleUrls: ['./auto-existing-forms-page.component.css']
})
export class AutoExistingFormsPageComponent implements OnInit {

  forms: AddForm = new AddForm();

  constructor() { }

  ngOnInit(): void {
  }

}
