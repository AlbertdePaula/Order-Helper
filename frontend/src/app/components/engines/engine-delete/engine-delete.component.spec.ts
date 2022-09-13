import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDeleteComponent } from './engine-delete.component';

describe('EngineDeleteComponent', () => {
  let component: EngineDeleteComponent;
  let fixture: ComponentFixture<EngineDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
