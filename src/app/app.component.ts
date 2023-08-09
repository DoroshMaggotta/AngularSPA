import {Component} from '@angular/core';
import {GetCardService} from "./service/get-card.service";
import {CardInterface} from "./interface/cardInterface";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'frontend-test';
  public cardArr: Array<CardInterface> = [];

  constructor(private getCardService: GetCardService) {
  }

  getCard() {
    // this.getCardService.getInfo().subscribe((data: any) => {this.cardArr = data.results})
    this.getCardService.getArticle()
  }

  async ngOnInit() {
    this.cardArr = await this.getCardService.getInfo();
    console.log(this.cardArr)
  }
}
