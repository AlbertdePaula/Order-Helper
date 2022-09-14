import { EngineService } from '../../../services/engine.service';
import { Component, OnInit } from '@angular/core';
import { EngineData } from "src/app/interfaces/Engines";
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {
  engines: EngineData[] = [];

  displayedColumns = ['tag','description','actions'];

  panelOpenState = false;

  constructor(private listService: EngineService){
    this.getEngines();
  }

  ngOnInit(): void {
    console.log(this.engines);
  }

  getEngines(): void {
    this.listService.getAll().subscribe((engines) => (this.engines = engines));
    console.log(this.engines);
  }

}

