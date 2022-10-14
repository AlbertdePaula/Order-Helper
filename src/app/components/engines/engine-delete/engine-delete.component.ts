import { Component, OnInit } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';
import { EngineService } from 'src/app/services/engines/engine.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engine-delete',
  templateUrl: './engine-delete.component.html',
  styleUrls: ['./engine-delete.component.scss']
})
export class EngineDeleteComponent implements OnInit {

  engines!: EngineData;

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

  deleteEngine(): void {
    if (this.engines.id) {
      this.engineService.delete(this.engines.id).subscribe(() => {
        this.engineService.showMessage('Produto excluido com sucesso!');
        this.router.navigate(['/engines/engine-list'])
      })
    }
  }

}
