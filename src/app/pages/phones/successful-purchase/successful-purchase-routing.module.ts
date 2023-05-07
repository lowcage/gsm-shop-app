import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulPurchaseComponent } from './successful-purchase.component';

const routes: Routes = [{ path: ':userId', component: SuccessfulPurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfulPurchaseRoutingModule { }
