import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza.model';

@Injectable({
  providedIn: 'root'
})
  
  
export class PizzasService {

  public host: string = "http://localhost:3000/api/pizzas";
  
  constructor(private httpClient:HttpClient) { }
  
  public searchPizzas():Observable<Pizza> {
   
    return this.httpClient.get<Pizza>(this.host);
  }

  
}
