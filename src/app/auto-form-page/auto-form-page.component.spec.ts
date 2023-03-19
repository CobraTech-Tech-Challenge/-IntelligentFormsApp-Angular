import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormPageComponent } from './auto-form-page.component';

describe('AutoFormPageComponent', () => {
  let component: AutoFormPageComponent;
  let fixture: ComponentFixture<AutoFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
