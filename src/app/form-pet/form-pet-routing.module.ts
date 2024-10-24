import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPetPage } from './form-pet.page';

const routes: Routes = [
  {
    path: '',
    component: FormPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPetPageRoutingModule {}
