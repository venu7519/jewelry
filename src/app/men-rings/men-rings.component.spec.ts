import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenRingsComponent } from './men-rings.component';

describe('MenRingsComponent', () => {
  let component: MenRingsComponent;
  let fixture: ComponentFixture<MenRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
