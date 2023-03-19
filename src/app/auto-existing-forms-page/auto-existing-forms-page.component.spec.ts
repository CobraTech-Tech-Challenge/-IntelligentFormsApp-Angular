import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoExistingFormsPageComponent } from './auto-existing-forms-page.component';

describe('AutoExistingFormsPageComponent', () => {
  let component: AutoExistingFormsPageComponent;
  let fixture: ComponentFixture<AutoExistingFormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoExistingFormsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoExistingFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
