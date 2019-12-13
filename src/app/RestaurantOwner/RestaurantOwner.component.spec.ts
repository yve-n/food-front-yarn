import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOwnerComponent } from './RestaurantOwner.component';

describe('CompteRestoComponent', () => {
  let component: RestaurantOwnerComponent;
  let fixture: ComponentFixture<RestaurantOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
