import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroProfileComponent } from './libro-profile.component';

describe('LibroProfileComponent', () => {
  let component: LibroProfileComponent;
  let fixture: ComponentFixture<LibroProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
