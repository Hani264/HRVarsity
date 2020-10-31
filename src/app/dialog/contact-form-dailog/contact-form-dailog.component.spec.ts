import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDailogComponent } from './contact-form-dailog.component';

describe('ContactFormDailogComponent', () => {
  let component: ContactFormDailogComponent;
  let fixture: ComponentFixture<ContactFormDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
