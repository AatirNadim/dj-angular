import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatirComponent } from './aatir.component';

describe('AatirComponent', () => {
  let component: AatirComponent;
  let fixture: ComponentFixture<AatirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AatirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AatirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
