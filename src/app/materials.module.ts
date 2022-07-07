import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialsModule { }
