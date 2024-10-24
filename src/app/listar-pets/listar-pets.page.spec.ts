import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPetsPage } from './listar-pets.page';

describe('ListarPetsPage', () => {
  let component: ListarPetsPage;
  let fixture: ComponentFixture<ListarPetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
