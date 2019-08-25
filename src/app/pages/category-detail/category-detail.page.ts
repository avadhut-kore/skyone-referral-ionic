import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ReferralService } from 'src/app/services/referral.service';
import { Referral } from 'src/app/interfaces/Referral';

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
  referralForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private referralService: ReferralService,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public alertController: AlertController) {

    this.referralForm = formBuilder.group({
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
    console.warn(this.referralForm.value);
    this.router.navigateByUrl('/app/tabs/referrals');
    // this.submitReferralForm.reset();
  }

  async onFormSubmit(form: NgForm) {    
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.referralService.addReferral(form)
      .subscribe(res => {
        // let id = res['id'];
        console.log('success');
        loading.dismiss();
        console.log(this.router);
        // this.router.navigate([{ outlets: { details: id } }], { relativeTo: this.route.parent });
      }, (err) => {
        console.log(err);
        loading.dismiss();
      });
  }
}