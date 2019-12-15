import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantItemComponent } from './list-restaurant-item.component';

describe('RestoListItemComponent', () => {
  let component: ListRestaurantItemComponent;
  let fixture: ComponentFixture<ListRestaurantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestaurantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaurantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
