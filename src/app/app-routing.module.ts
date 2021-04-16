import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

const routes: Routes = [
  {path:"pizzas-list" , component:PizzaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
