import { EngineService } from './../../../services/engines/engine.service';
import { EngineData } from 'src/app/interfaces/Engines';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engine-create',
  templateUrl: './engine-create.component.html',
  styleUrls: ['./engine-create.component.scss']
})
export class EngineCreateComponent implements OnInit {

  engines: EngineData = {
    id: '',
    tag: '',
    description: '',
    current: 0,
    power: 0,
    rpm: 0
  }

  constructor(private engineService: EngineService, private router: Router) { }
  disableButton: boolean = false;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  createEngine(): void {
    if (this.engines.tag === '') {
      //this.engines.tag = 'vazio';
      this.disableButton = true;
      alert('campo vazio!')
    }
    else
    this.engineService.create(this.engines).subscribe(() => {
      this.engineService.showMessage('Item inserido!')
      this.router.navigate(['/engines'])
    })
  }

  cancel(): void {
    this.router.navigate(['/engines/engine-list'])
  }

}
