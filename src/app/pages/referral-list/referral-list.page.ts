import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Referral } from 'src/app/interfaces/Referral';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.page.html',
  styleUrls: ['./referral-list.page.scss'],
})
export class ReferralListPage implements OnInit {

  allReferrals: Observable<Referral[]>;
  userId: string;

  constructor(private referralService: ReferralService) { }

  ngOnInit() {
    this.userId = "1";
    this.loadAllReferralsOfUser(this.userId);
  }

  loadAllReferralsOfUser(userId: string) {
    this.allReferrals = this.referralService.getReferralsByUser(userId);
  }
}
