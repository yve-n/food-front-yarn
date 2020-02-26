import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoVilleComponent } from './resto-ville.component';

describe('RestoVilleComponent', () => {
  let component: RestoVilleComponent;
  let fixture: ComponentFixture<RestoVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
