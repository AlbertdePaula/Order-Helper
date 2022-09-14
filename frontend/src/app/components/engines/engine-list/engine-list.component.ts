import { EngineService } from '../../../services/engine.service';
import { Component, OnInit } from '@angular/core';
import { EngineData } from "src/app/interfaces/Engines";
import { Router } from '@angular/router';

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {
  engines: EngineData[] = [];

  displayedColumns = ['tag','description','actions'];

  panelOpenState = false;

  nome: string = 'adao';

  constructor(private listService: EngineService, private router: Router){
    this.getEngines();
  }

  ngOnInit(): void {
    console.log(this.engines);
  }

  getEngines(): void {
    this.listService.getAll().subscribe((engines) => (this.engines = engines));
    console.log(this.engines);
  }

  editButton(id: string): void {
    this.router.navigate([`/engines/engine-update/${id}`]);
  }

  createButton(): void {
    this.router.navigate([`/engines/engine-create`])
  }
}

