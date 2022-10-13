import { PartUpdateComponent } from './part-update.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PartUpdateComponent', () => {
  let component: PartUpdateComponent;
  let fixture: ComponentFixture<PartUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
