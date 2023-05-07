import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-successful-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.scss']
})
export class SuccessfulPurchaseComponent {
  userId: string = '';

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((param: any) => {
      this.userId = param.userId;
    })
  }
}
