import { PartsService } from './../../../services/parts.service';
import { PartData } from 'src/app/interfaces/Part';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss']
})
export class PartsListComponent implements OnInit {

  part: PartData[] = [];

  constructor(private listService: PartsService) {
    this.getParts();
   }

  ngOnInit(): void {
  }

  getParts(): void {
    this.listService.getAll().subscribe((part) => (this.part = part));
    console.log(this.part);
  }
}
