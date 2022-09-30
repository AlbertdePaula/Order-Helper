import { EngineService } from '../../../services/engine.service';
import { Component, OnInit } from '@angular/core';
import { EngineData } from "src/app/interfaces/Engines";
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {
  engines: EngineData[] = [];

  displayedColumns = ['tag', 'description', 'actions'];

  panelOpenState = false;

  constructor(private listService: EngineService, private router: Router) {
    this.getEngines();
  }

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.innerWidth = window.innerWidth;
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

  show(): void {
    alert("Deu certo")
  }
}

