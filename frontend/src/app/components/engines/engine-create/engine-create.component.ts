import { EngineData } from 'src/app/interfaces/Engines';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine-create',
  templateUrl: './engine-create.component.html',
  styleUrls: ['./engine-create.component.scss']
})
export class EngineCreateComponent implements OnInit {

  engines: EngineData = {
    id: 0,
    tag: '',
    description: '',
    current: 0,
    power: 0,
    rpm: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
