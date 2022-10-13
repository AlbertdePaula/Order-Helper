import { Order } from './../../../interfaces/Order';
import { EngineData } from 'src/app/interfaces/Engines';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-executing',
  templateUrl: './orders-executing.component.html',
  styleUrls: ['./orders-executing.component.scss']
})
export class OrdersExecutingComponent implements OnInit {

  engines: Order[] = [
    {orderNumber: 6345646,
    description: 'sdadf'}
  ];

  ngOnInit() {

  }

}
