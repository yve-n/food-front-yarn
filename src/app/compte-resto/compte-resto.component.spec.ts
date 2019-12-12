import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRestoComponent } from './compte-resto.component';

describe('CompteRestoComponent', () => {
  let component: CompteRestoComponent;
  let fixture: ComponentFixture<CompteRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
