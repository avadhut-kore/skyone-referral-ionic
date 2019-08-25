import { Component, OnInit } from '@angular/core';
import { Referral } from 'src/app/interfaces/Referral';
import { Router, ActivatedRoute } from '@angular/router';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-referral-detail',
  templateUrl: './referral-detail.page.html',
  styleUrls: ['./referral-detail.page.scss'],
})
export class ReferralDetailPage implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  referral: Referral;
  referralId: any;

  // products: Observable<Product[]>;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private referralService: ReferralService) {


  }
  ionViewWillEnter() {
    this.referralId = this.route.snapshot.paramMap.get('referralId');
    this.referralService.getReferralById(this.referralId).subscribe(data => {
      this.referral = data;
      console.log(this.referral);
    });;

    // this.products = this.productService.getProductsByCategory(this.categoryId);
  }

}
