import { PartsService } from './../../../services/parts/parts.service';
import { PartData } from 'src/app/interfaces/Part';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss']
})
export class PartsListComponent implements OnInit {

  part: PartData[] = [];

  constructor(private listService: PartsService, private router: Router) {
    this.getParts();
   }

  ngOnInit(): void {
  }

  getParts(): void {
    this.listService.getAll().subscribe((part) => (this.part = part));
    console.log(this.part);
  }

  createButton(): void {
    this.router.navigate([`parts/parts-create`])
  }

  editButton(id:string): void {
    this.router.navigate([`/parts/part-update/${id}`])
  }
}
