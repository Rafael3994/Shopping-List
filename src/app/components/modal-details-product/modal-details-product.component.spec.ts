import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsProductComponent } from './modal-details-product.component';

describe('ModalDetailsProductComponent', () => {
  let component: ModalDetailsProductComponent;
  let fixture: ComponentFixture<ModalDetailsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
