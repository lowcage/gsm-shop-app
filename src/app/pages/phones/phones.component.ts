import { Component, OnInit } from '@angular/core';
import {PhonesService} from "../../shared/services/phones.service";
import {Phone} from "../../shared/models/Phone";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phonesObject?: Array<Phone>;
  chosenPhone?: Phone;
  chosenBrandPhones: Array<any> = [];

  constructor(private phonesService: PhonesService) {
  }

  ngOnInit() {
    this.phonesService.loadImageMeta('__credits.json').subscribe((data: Array<Phone>) => {
      this.phonesObject = data;
    })
  }

  loadBrandPhones(brand: string) {
    if (this.phonesObject) {
      this.chosenBrandPhones = this.phonesObject.filter(phone => phone.brand_name === brand);
      this.chosenPhone = this.chosenBrandPhones[0];
    }
  }
}
