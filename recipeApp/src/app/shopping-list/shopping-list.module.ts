import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Routes, RouterModule } from '@angular/router';

const shoppingListRoute: Routes = [
  {
    path: '',
    component: ShoppingListComponent
  }
]

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(shoppingListRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListModule {

}