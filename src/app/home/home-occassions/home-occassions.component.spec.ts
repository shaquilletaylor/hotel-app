import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOccassionsComponent } from './home-occassions.component';

describe('HomeOccassionsComponent', () => {
  let component: HomeOccassionsComponent;
  let fixture: ComponentFixture<HomeOccassionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOccassionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOccassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
