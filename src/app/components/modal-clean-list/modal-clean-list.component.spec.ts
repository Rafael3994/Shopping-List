import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCleanListComponent } from './modal-clean-list.component';

describe('ModalCleanListComponent', () => {
  let component: ModalCleanListComponent;
  let fixture: ComponentFixture<ModalCleanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCleanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCleanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
