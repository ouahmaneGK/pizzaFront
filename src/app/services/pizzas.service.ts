import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza.model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
  
  
export class PizzasService {

  public host: string = environment.apiUrl;
  
  constructor(private httpClient:HttpClient) { }
  
  public searchPizzas():Observable<Pizza> {
   
    return this.httpClient.get<Pizza>(this.host);
  }

  
}
