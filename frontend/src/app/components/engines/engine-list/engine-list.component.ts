import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Lista {
  id: Number,
  tag: String,
  description: String,
  current: Number
}

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {

  displayedColumns = ['tag','description','current', 'action'];

 ELEMENT_DATA: Lista[] = [
    {id: 1, tag: 'MB311001', description: 'Motor redutor', current:16.1},
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA)

  constructor() { }

  ngOnInit(): void {
  }

}

