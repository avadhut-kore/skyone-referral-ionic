import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryListPage } from './category-list.page';
import { CategoryListPageRoutingModule } from './category-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryListPageRoutingModule
  ],
  declarations: [CategoryListPage]
})
export class CategoryListPageModule {}
