import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  allEmployees: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    // this.loadAllCategories();
  }

  loadAllCategories() {
    this.allEmployees = this.categoryService.getAllCategories();
  }

}
