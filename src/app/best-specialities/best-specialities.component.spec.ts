import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSpecialitiesComponent } from './best-specialities.component';

describe('BestSpecialitiesComponent', () => {
  let component: BestSpecialitiesComponent;
  let fixture: ComponentFixture<BestSpecialitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSpecialitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
