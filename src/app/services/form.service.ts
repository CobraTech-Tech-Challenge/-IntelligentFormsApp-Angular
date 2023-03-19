import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddForm } from './../models/add-form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient) { }

  public createForm(form: any) {
    return this.httpClient.post<AddForm>("http://localhost:8080/create-form", form);
  }
}
