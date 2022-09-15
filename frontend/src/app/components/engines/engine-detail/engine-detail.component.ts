import { Component, OnInit } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';
import { EngineService } from 'src/app/services/engine.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: ['./engine-detail.component.scss']
})
export class EngineDetailComponent implements OnInit {

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

  cancel(): void {
    this.router.navigate(['/engines/engine-list'])
  }
}
