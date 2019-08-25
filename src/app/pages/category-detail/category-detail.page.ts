import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
  category: Category;
  categoryId: any;

  // products: Observable<Product[]>;

  firstName: any;
  lastName: any;
  submitReferralForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    public formBuilder: FormBuilder) {

    this.submitReferralForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: [''],
      productId: ['', Validators.required],
      city: [''],
      notes: ['']
    });
  }
  ionViewWillEnter() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategoryById(this.categoryId).subscribe(data => {
      this.category = data;
      console.log(this.category);
    });;

    // this.products = this.productService.getProductsByCategory(this.categoryId);
  }

  handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

  handleLastNameValue(event) {
    this.lastName = event.target.value;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.submitReferralForm.value);
    // this.router.navigateByUrl('/app/tabs/home');
    this.submitReferralForm.reset();
  }
}