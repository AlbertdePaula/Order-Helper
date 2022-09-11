import { Router } from '@angular/router';
import { EngineService } from './../../../services/engine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine-update',
  templateUrl: './engine-update.component.html',
  styleUrls: ['./engine-update.component.scss']
})
export class EngineUpdateComponent implements OnInit {

  constructor(private engineService: EngineService, private router: Router) { }

  ngOnInit(): void {
  }

  updateEngine(): void {

  }

  cancel(): void {
    this.router.navigate(['/engines/engine-list'])
  }
}
