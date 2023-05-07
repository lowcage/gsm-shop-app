import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import {PhonesComponent} from "./phones.component";
import {FilterComponent} from "./filter/filter.component";
import {ViewerComponent} from "./viewer/viewer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PhonesComponent,
    FilterComponent,
    ViewerComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PhonesModule { }
