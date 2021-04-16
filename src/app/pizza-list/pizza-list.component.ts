import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  public pizzas :any;

  constructor(private pizzasService: PizzasService) { }

  ngOnInit(): void {
    this.onSearchPizzas();
  }

 private onSearchPizzas() {
    this.pizzasService.searchPizzas()
      .subscribe(data => {
        this.pizzas = data;
        console.log("pizzas" , this.pizzas)
      }, err => {
        console.log(err);
        });
  }

}
