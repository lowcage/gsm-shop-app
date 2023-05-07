import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges{

  @Input() phoneObjectInput?: Array<any>;
  @Output() brandEmitter: EventEmitter<string> = new EventEmitter();
  chosenBrand: string = '';
  brandList: Array<string> = [];

  constructor() {
  }

  ngOnChanges() {
    this.loadBrands();
    if (this.brandList.length > 0) {
      this.chosenBrand = this.brandList[0];
      this.reloadBrand();
    }
  }

  ngOnInit() {

  }

  loadBrands() {
    if (this.phoneObjectInput) {
      this.brandList = [...new Set(this.phoneObjectInput.map(phone => phone.brand_name))];
    }
  }

  reloadBrand() {
    this.brandEmitter.emit(this.chosenBrand);
  }
}
