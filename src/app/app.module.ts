import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';
import { StudentComponent } from './student/student.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { PipeClassComponent } from './pipe-class/pipe-class.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { MathPipe } from './pipes/math.pipe';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialClassComponent } from './material-class/material-class.component'
import { MaterialsModule } from './materials.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingOneComponent } from "./sibling-one/sibling-one.component";
import { SiblingTwoComponent } from "./sibling-two/sibling-two.component";
import { FormDetailsComponent } from './form-details/form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    NotFoundComponent,
    InfoComponent,
    StudentComponent,
    SigninComponent,
    PhoneValidatorDirective,
    PipeClassComponent,
    MultiplyPipe,
    MathPipe,
    ItemFilterPipe,
    MaterialClassComponent,
    ParentComponent,
    ChildComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
