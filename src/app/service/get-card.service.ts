import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CardInterface} from "../interface/cardInterface";

@Injectable({
  providedIn: 'root'
})
export class GetCardService {
  public cardArr: Array<CardInterface> = [];
  public articleUrl = "https://spacenews.com/redwire-to-supply-cameras-for-true-anomalys-inspector-satellites/";
  private baseURL = 'https://api.spaceflightnewsapi.net/v4/articles/'

  constructor(private http: HttpClient) {
  }

  async getInfo(): Promise<Array<CardInterface>> {
    const data: any = await this.http.get(this.baseURL).toPromise()
    return data.results
  }

  async getArticle(): Promise<any> {
    const data: any = await this.http.get(this.articleUrl).toPromise()
    console.log(data)
    return data;
  }


}
