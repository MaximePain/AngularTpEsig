import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauxListComponent } from './vaisseaux-list.component';

describe('VaisseauxListComponent', () => {
  let component: VaisseauxListComponent;
  let fixture: ComponentFixture<VaisseauxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaisseauxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
