import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoListItemComponent } from './resto-list-item.component';

describe('RestoListItemComponent', () => {
  let component: RestoListItemComponent;
  let fixture: ComponentFixture<RestoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
