import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeadersComponent } from './shared-headers.component';

describe('SharedHeadersComponent', () => {
  let component: SharedHeadersComponent;
  let fixture: ComponentFixture<SharedHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
