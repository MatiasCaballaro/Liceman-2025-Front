import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [ ],
  imports: [
    SidebarComponent,
    CommonModule
  ],
  exports: [
    CommonModule,
    SidebarComponent
  ]
})
export class SharedModule { }