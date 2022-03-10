import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeadersComponent } from './shared-headers/shared-headers.component';



@NgModule({
  declarations: [
    SharedHeadersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SharedHeadersComponent]
})
export class SharedModule { }
