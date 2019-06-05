import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProfileComponent } from './pedido-profile.component';

describe('PedidoProfileComponent', () => {
  let component: PedidoProfileComponent;
  let fixture: ComponentFixture<PedidoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
