import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaseoPage } from './paseo.page';

describe('PaseoPage', () => {
  let component: PaseoPage;
  let fixture: ComponentFixture<PaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
