import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartUpadateComponent } from './part-upadate.component';

describe('PartUpadateComponent', () => {
  let component: PartUpadateComponent;
  let fixture: ComponentFixture<PartUpadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartUpadateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartUpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
