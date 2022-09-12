import { EngineService } from './../../../services/engine.service';
import { EngineData } from 'src/app/interfaces/Engines';
import { Component, OnInit, OnChanges } from '@angular/core';
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
  disableButton: boolean = false;
  ngOnInit(): void {
  }

  ngOnChangea(): void {
    if (this.engines.tag === '') {
      //this.engines.tag = 'vazio';
      this.disableButton = true;
      alert('campo vazio!')
    }
  }

  createEngine(): void {
    if (this.engines.tag === '') {
      //this.engines.tag = 'vazio';
      this.disableButton = true;
      alert('campo vazio!')
    }
    else
    this.EngineService.create(this.engines).subscribe(() => {
      this.EngineService.showMessage('Item inserido!')
      this.router.navigate(['/engines'])
    })
  }

  cancel(): void {
    this.router.navigate(['/engines/engine-list'])
  }

}
