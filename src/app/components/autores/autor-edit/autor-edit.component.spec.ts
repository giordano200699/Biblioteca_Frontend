import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEditComponent } from './autor-edit.component';

describe('AutorEditComponent', () => {
  let component: AutorEditComponent;
  let fixture: ComponentFixture<AutorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
