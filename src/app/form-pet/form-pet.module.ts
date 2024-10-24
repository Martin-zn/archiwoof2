import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPetPageRoutingModule } from './form-pet-routing.module';

import { FormPetPage } from './form-pet.page';
import { PetsComponent } from '../components/pets/pets.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPetPageRoutingModule
  ],
  declarations: [FormPetPage,PetsComponent]
})
export class FormPetPageModule {}
