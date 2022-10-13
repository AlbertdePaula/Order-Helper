import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersExecutingComponent } from './orders-executing.component';

describe('OrdersExecutingComponent', () => {
  let component: OrdersExecutingComponent;
  let fixture: ComponentFixture<OrdersExecutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersExecutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersExecutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
