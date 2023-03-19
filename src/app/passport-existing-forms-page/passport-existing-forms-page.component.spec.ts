import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportExistingFormsPageComponent } from './passport-existing-forms-page.component';

describe('PassportExistingFormsPageComponent', () => {
  let component: PassportExistingFormsPageComponent;
  let fixture: ComponentFixture<PassportExistingFormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportExistingFormsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportExistingFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
