import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from "../../app/services/random-number.service"

@Component({
  selector: 'app-perro',
  templateUrl: './perro.page.html',
  styleUrls: ['./perro.page.scss'],
})
export class PerroPage implements OnInit {

  randomNumber: number | null = null;

  constructor(private randomNumberService: RandomNumberService) {}

  ngOnInit() {
    this.fetchRandomNumber();
  }

  fetchRandomNumber() {
    this.randomNumberService.getRandomNumber().subscribe((number) => {
      this.randomNumber = number;
    });
  }

}
