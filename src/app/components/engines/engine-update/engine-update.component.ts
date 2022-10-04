import { ActivatedRoute ,Router } from '@angular/router';
import { EngineService } from './../../../services/engine.service';
import { Component, OnInit } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';

@Component({
  selector: 'app-engine-update',
  templateUrl: './engine-update.component.html',
  styleUrls: ['./engine-update.component.scss']
})
export class EngineUpdateComponent implements OnInit {

  engines!: EngineData;

  isFocused: boolean = false;
  someValue: string = '';

  constructor(
    private engineService: EngineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');


    if (id) {
      this.engineService.readById(id).subscribe(engines => {
        this.engines = engines;
      });
    }
  }

  updateEngine(): void {
    this.engineService.update(this.engines).subscribe(() => {
      this.engineService.showMessage('Equipamento atualizado com sucesso!');
      this.router.navigate(['/engines']);
    })
  }

  cancelButton(): void {
    this.router.navigate(['/engines/engine-list'])
  }

  deleteButton(id: string): void {
    this.router.navigate([`/engines/engine-delete/${id}`])
  }

}
