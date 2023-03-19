import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportFormPageComponent } from './passport-form-page.component';

describe('PassportFormPageComponent', () => {
  let component: PassportFormPageComponent;
  let fixture: ComponentFixture<PassportFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
