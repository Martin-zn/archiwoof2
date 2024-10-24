import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPetsPage } from './listar-pets.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPetsPageRoutingModule {}
