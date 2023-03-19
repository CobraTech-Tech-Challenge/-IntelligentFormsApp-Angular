import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCreateFormPageComponent } from './auto-create-form-page.component';

describe('AutoCreateFormPageComponent', () => {
  let component: AutoCreateFormPageComponent;
  let fixture: ComponentFixture<AutoCreateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCreateFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCreateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
