import { Order } from './../../../interfaces/Order';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-orders-executing',
  templateUrl: './orders-executing.component.html',
  styleUrls: ['./orders-executing.component.scss']
})
export class OrdersExecutingComponent implements OnInit {

  asyncTabs: Observable<Order[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<Order[]>) => {
      setTimeout(() => {
        observer.next([
          {orderNumber: 554637, description: 'Content 1'},
          {orderNumber: 443422, description: 'Content 2'},
          {orderNumber: 887980, description: 'Content 3'},
        ]);
      }, 1000);
    });
  }
  ngOnInit() {

  }
}
