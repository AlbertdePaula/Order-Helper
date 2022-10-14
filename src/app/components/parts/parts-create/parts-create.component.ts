import { Router } from '@angular/router';
import { PartsService } from './../../../services/parts/parts.service';
import { PartData } from './../../../interfaces/Part';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-create',
  templateUrl: './parts-create.component.html',
  styleUrls: ['./parts-create.component.scss']
})
export class PartsCreateComponent implements OnInit {

  part: PartData = {
    id: '',
    code: 0,
    description: '',
    location: '',
    area: ''
  }

  constructor(private partsService: PartsService, private router: Router) { }

  ngOnInit(): void {
  }

  createPart(): void {
    if (this.part.location == '') {
      //this.part.tag = 'vazio';
/*       this.disableButton = true;
      alert('campo vazio!') */
    }
    else
    this.partsService.create(this.part).subscribe(() => {
      this.partsService.showMessage('Item inserido!')
      this.router.navigate(['/part'])
    })
  }

}
