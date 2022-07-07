import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialClassComponent } from './material-class.component';

describe('MaterialClassComponent', () => {
  let component: MaterialClassComponent;
  let fixture: ComponentFixture<MaterialClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
