import { Router, ActivatedRoute } from '@angular/router';
import { PartData } from './../../../interfaces/Part';
import { Component, OnInit } from '@angular/core';
import { PartsService } from 'src/app/services/parts.service';

@Component({
  selector: 'app-part-upadate',
  templateUrl: './part-upadate.component.html',
  styleUrls: ['./part-upadate.component.scss']
})
export class PartUpadateComponent implements OnInit {

  part!: PartData;

  constructor(
    private partService: PartsService,
    private router: Router,
    private routes: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  updatePart(): void {
    this.partService.update(this.part).subscribe(() => {
      this.partService.showMessage('Produto atualizado com sucesso!');
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
