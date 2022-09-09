import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDetailComponent } from './engine-detail.component';

describe('EngineDetailComponent', () => {
  let component: EngineDetailComponent;
  let fixture: ComponentFixture<EngineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
