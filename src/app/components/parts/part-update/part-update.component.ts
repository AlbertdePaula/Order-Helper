import { Router, ActivatedRoute } from '@angular/router';
import { PartData } from '../../../interfaces/Part';
import { Component, OnInit } from '@angular/core';
import { PartsService } from 'src/app/services/parts/parts.service';

@Component({
  selector: 'app-part-update',
  templateUrl: './part-update.component.html',
  styleUrls: ['./part-update.component.scss']
})
export class PartUpdateComponent implements OnInit {

  part!: PartData;

  constructor(
    private partService: PartsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.partService.readById(id).subscribe(part => {
        this.part = part;
      });
    }
  }

  updatePart(): void {
    this.partService.update(this.part).subscribe(() => {
      this.partService.showMessage('Componente atualizado com sucesso!');
      this.router.navigate(['/part']);
    })
  }

  cancelButton(): void {
    this.router.navigate(['/part/part-list'])
  }

  deleteButton(id: string): void {
    this.router.navigate([`/part/part-delete/${id}`])
  }

}
