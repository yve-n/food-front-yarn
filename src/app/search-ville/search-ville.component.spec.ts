import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVilleComponent } from './search-ville.component';

describe('SearchVilleComponent', () => {
  let component: SearchVilleComponent;
  let fixture: ComponentFixture<SearchVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
