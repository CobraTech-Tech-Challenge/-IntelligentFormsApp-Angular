import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportCreateFormPageComponent } from './passport-create-form-page.component';

describe('PassportCreateFormPageComponent', () => {
  let component: PassportCreateFormPageComponent;
  let fixture: ComponentFixture<PassportCreateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportCreateFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportCreateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
