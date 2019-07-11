import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeExampleComponent } from './stripe-example.component';

describe('StripeExampleComponent', () => {
  let component: StripeExampleComponent;
  let fixture: ComponentFixture<StripeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
