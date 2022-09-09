import { EngineService } from './../../../services/engine.service';
import { EngineData } from 'src/app/interfaces/Engines';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private EngineService: EngineService, private router: Router) { }

  ngOnInit(): void {
  }

  createEngine(): void {
    this.EngineService.create(this.engines).subscribe(() => {
      this.EngineService.showMessage('Item inserido!')
      this.router.navigate(['/engines'])
    })
  }

}
