import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPetsPageRoutingModule } from './listar-pets-routing.module';

import { ListarPetsPage } from './listar-pets.page';
import { ListPetsComponent } from '../components/list-pets/list-pets.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPetsPageRoutingModule
  ],
  declarations: [ListarPetsPage, ListPetsComponent]
})
export class ListarPetsPageModule {}
