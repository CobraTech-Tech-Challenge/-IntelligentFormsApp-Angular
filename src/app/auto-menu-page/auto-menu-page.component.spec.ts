import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMenuPageComponent } from './auto-menu-page.component';

describe('AutoMenuPageComponent', () => {
  let component: AutoMenuPageComponent;
  let fixture: ComponentFixture<AutoMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
