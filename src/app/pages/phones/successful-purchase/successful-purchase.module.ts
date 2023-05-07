import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessfulPurchaseRoutingModule } from './successful-purchase-routing.module';
import { SuccessfulPurchaseComponent } from './successful-purchase.component';


@NgModule({
  declarations: [
    SuccessfulPurchaseComponent
  ],
  imports: [
    CommonModule,
    SuccessfulPurchaseRoutingModule
  ]
})
export class SuccessfulPurchaseModule { }
