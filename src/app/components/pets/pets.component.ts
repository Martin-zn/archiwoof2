import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from 'src/app/services/pets.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent  implements OnInit {
  pet:Pet = {nombre:"", anoNacimiento:0, imageUrl:"", descripcion:"", ownerEmail:""}
  constructor(
    private petsService:PetsService,
    private aService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {}

  addPet(){
    this.petsService.addPet(this.pet).then(()=>{
      alert("Mascota agregada correctamente!")
      this.pet = {nombre:"", anoNacimiento:0, imageUrl:"", descripcion:"", ownerEmail:""}
    }).catch(error=>{alert("arror al agregar "+error)})
  }

  

}
