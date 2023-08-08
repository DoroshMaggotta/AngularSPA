import { Component } from '@angular/core';
import {GetCardService} from "./service/get-card.service";
import {CardInterface} from "./interface/cardInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-test';
  public cardArr: Array<CardInterface> = [];
  constructor(private getCardService: GetCardService) {
  }

  getCard() {
    this.getCardService.getInfo().subscribe((data: any) => {this.cardArr = data.results})
}
}
