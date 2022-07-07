import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeClassComponent } from './pipe-class.component';

describe('PipeClassComponent', () => {
  let component: PipeClassComponent;
  let fixture: ComponentFixture<PipeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
