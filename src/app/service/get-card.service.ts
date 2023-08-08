import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetCardService {
  private baseURL = 'https://api.spaceflightnewsapi.net/v4/articles/'
  constructor(private http: HttpClient) { }
  getInfo() {
    return  this.http.get(this.baseURL)
    }
}
