import { MatButtonModule } from '@angular/material/button';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineCreateComponent } from './engine-create.component';

describe('EngineCreateComponent', () => {
  let component: EngineCreateComponent;
  let fixture: ComponentFixture<EngineCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule ],
      declarations: [ EngineCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
