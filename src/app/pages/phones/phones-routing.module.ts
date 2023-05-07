import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhonesComponent} from "./phones.component";

const routes: Routes = [
  { path: '', component: PhonesComponent },
  { path: 'successful-purchase', loadChildren: () => import('./successful-purchase/successful-purchase.module').then(m => m.SuccessfulPurchaseModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
