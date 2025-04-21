import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import  {LandingPageComponent} from "./landing-page.component"

const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    LandingPageComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LandingModule { }