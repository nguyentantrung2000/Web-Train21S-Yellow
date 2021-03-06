import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import { ItemComponent } from './components/table/item/item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, MenuComponent, TableComponent, ItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
