import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from 'src/app/services/pets.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss'],
})
export class ListPetsComponent  implements OnInit {
  pets:Pet[]=[]
  constructor(private petsService:PetsService) { }

  ngOnInit() {
    this.petsService.getPet().subscribe(pets => {
      this.pets = pets;
    })
  }

}
