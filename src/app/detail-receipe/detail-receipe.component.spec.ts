import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReceipeComponent } from './detail-receipe.component';

describe('DetailReceipeComponent', () => {
  let component: DetailReceipeComponent;
  let fixture: ComponentFixture<DetailReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
