import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieFormComponent } from './messagerie-form.component';

describe('MessagerieFormComponent', () => {
  let component: MessagerieFormComponent;
  let fixture: ComponentFixture<MessagerieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagerieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
