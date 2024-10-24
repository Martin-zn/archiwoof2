import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPetPage } from './form-pet.page';

describe('FormPetPage', () => {
  let component: FormPetPage;
  let fixture: ComponentFixture<FormPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
