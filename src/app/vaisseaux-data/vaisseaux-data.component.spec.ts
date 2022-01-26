import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauxDataComponent } from './vaisseaux-data.component';

describe('VaisseauxDataComponent', () => {
  let component: VaisseauxDataComponent;
  let fixture: ComponentFixture<VaisseauxDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaisseauxDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
