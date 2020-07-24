import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesToPayComponent } from './services-to-pay.component';

describe('ServicesToPayComponent', () => {
  let component: ServicesToPayComponent;
  let fixture: ComponentFixture<ServicesToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
