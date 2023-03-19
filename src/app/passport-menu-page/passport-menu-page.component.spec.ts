import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportMenuPageComponent } from './passport-menu-page.component';

describe('PassportMenuPageComponent', () => {
  let component: PassportMenuPageComponent;
  let fixture: ComponentFixture<PassportMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
