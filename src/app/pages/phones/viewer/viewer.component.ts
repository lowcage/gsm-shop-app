import {Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {Purchase} from "../../../shared/models/Purchase";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Phone} from "../../../shared/models/Phone";
import {PhonesService} from "../../../shared/services/phones.service";
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges{
  @Input() phoneInput?: Phone;
  @Input() phonesInput: Array<Phone> = [];

  loadedImages: {[phoneId: string]: string} = {};

  purchases: Array<any> = [];

  user?: User;

  purchasesForm = this.createForm({
    id: null,
    username: '',
    amount: 0,
    phone_id: '',
    date: new Date()
  })

  constructor(private fb: FormBuilder, private router: Router, private phoneService: PhonesService, private purchaseService: PurchaseService, private userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phonesInput'] && changes['phonesInput'].currentValue) {
      const phoneIds = changes['phonesInput'].currentValue.map((p: { id: any; }) => p.id);
      phoneIds.forEach((phoneId: string) => {
        const phone = changes['phonesInput'].currentValue.find((p: { id: string }) => p.id === phoneId);
        this.phoneService.loadImage(phone.image_url).subscribe(data => {
          this.loadedImages[phoneId] = data;
        });
      });
    }
  }

  ngOnInit () {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      // @ts-ignore
      this.purchasesForm.get('username')?.setValue(this.user?.username);
    });
  }

  createForm(model: Purchase) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('amount')?.addValidators([Validators.required, Validators.min(1), Validators.max(99)]);
    return formGroup;
  }

  addPurchase(phone_id: string) {
    if (this.purchasesForm.valid) {
      if (this.purchasesForm.get('username') && this.purchasesForm.get('amount')) {
        this.purchasesForm.get('date')?.setValue(new Date());
        this.purchasesForm.get('phone_id')?.setValue(phone_id);
        this.purchaseService.create({...this.purchasesForm.value}).then(_ => {
          this.router.navigateByUrl('/phones/successful-purchase/' + this.purchasesForm.get('username')?.value)
        })
      }
    }
  }
}
